import { View, StyleSheet, Alert, Button } from "react-native";
import React, { useRef, useState } from "react";
import { Stack, router, useNavigation } from "expo-router";
import { IntentCreationCallbackParams } from "@stripe/stripe-react-native/lib/typescript/src/types/PaymentSheet";
import { PaymentMethod, PaymentSheetError } from "@stripe/stripe-react-native";
import {
  initPaymentSheet,
  presentPaymentSheet,
  StripeProvider,
} from "@/services/stripe";
import { createSetupIntent } from "@/utils/create-setup-intent";

export default function WalletScreen() {
  const [initLoading, setInitLoading] = useState<boolean>(false);
  const [shouldFetchUserCards, setShouldFetchUserCards] =
    useState<boolean>(false);

  // This local state is used when a user select a card to use for payment.
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const onGetSelectedPaymentMethodOfCard = (paymentMethodId: string) => {
    setSelectedCardId((prev) => paymentMethodId);
  };

  /**
   * This function represent the function you pass as parameter to initPaymentSheet.
   * When a user click on save button on the stripe UI, it call confirmPaymentSheetPayment in order to
   * confirm payment method. The "confirmPaymentSheetPayment" function call automatically this
   * function (confirmHandler) under the hood.
   * This function is responsible to make a request to your server using params PaymentMethod.Result
   * interface object in order to create setupIntent and return the created setupIntent client secret.
   * Once we received the setupIntent client secret we call the intentCreationCallback with our received
   * setupintent client secret or the error message. Then the paymentSheet confirm the setupIntent.
   */
  const confirmHandler = async (
    paymentMethod: PaymentMethod.Result,
    shouldSavePaymentMethod: boolean,
    intentCreationCallback: (result: IntentCreationCallbackParams) => void
  ) => {
    // Make a request to your own server, passing paymentMethod.id.
    // Your server creates a SetupIntent and returns its client secret or an error message
    const { success, message, setupIntentClientSecret } =
      await createSetupIntent({
        userId: userId as string,
        paymentMethodId: paymentMethod.id,
      });

    if (success && setupIntentClientSecret) {
      intentCreationCallback({
        clientSecret: setupIntentClientSecret,
      });

      // add flag to fetch user cards
      setShouldFetchUserCards((prev) => true);
    } else {
      intentCreationCallback({
        error: {
          code: "Failed",
          message: message,
        },
      });
    }
  };

  /**
   * This function is responsible for two tasks.
   * 1. To initialize the payment sheet with intentConfigurations.
   * 2. to present the stripe payment sheet ui on your app.
   * Once presented, the user can fill his card details and click on "Save" button of the payment sheet.
   * In default flow (as this one), when a user click on "Save" button on the stripe payment sheet ui,
   * it call the "confirmHandler" function passed in paramter to initPaymentSheet method and wait the completion
   * of that function before return a possible PaymentSheetError.Result.
   *
   */
  const initAndPresentPaymentSheetHandler = async () => {
    setInitLoading((prev) => true);
    // Initialize payment sheet
    const { error: initSheetError } = await initPaymentSheet({
      merchantDisplayName: "KamRide",
      intentConfiguration: {
        paymentMethodTypes: ["card"],
        mode: {
          currencyCode: "CAD",
          setupFutureUsage: "OnSession",
        },
        confirmHandler: confirmHandler,
      },
    });
    if (initSheetError) {
      setInitLoading((prev) => false);
      // handle error
    } else {
      setInitLoading((prev) => false);
      const { error, paymentOption } = await presentPaymentSheet();

      if (error) {
        if (error.code === PaymentSheetError.Canceled) {
          // Customer canceled - you should probably do nothing.
          return;
        } else if (PaymentSheetError.Timeout) {
          // Timeout response error
          Alert.alert(
            "Your payment failed due to timeout response. Please try later.",
            `${error.code}-${error.message}`
          );
        } else {
          // PaymentSheet encountered an unrecoverable error. You can display the error to the user, log it, etc.
          Alert.alert(
            "Your payment failed due to an unrecoverable error. Please try later.",
            `${error.code}-${error.message}`
          );
          return;
        }
      } else {
        // Make request to fetch user saved card
        // refetch();
        // Setup completed - show a confirmation screen.
      }
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "",
          headerShown: true,
          headerBackTitle: "Back",
          headerTitle: `My Wallet`,
          headerTitleAlign: "center",
          headerTintColor: "#854dbd",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
      />

      <StripeProvider>
        <View style={[{ ...styles.Container }]}>
          <Button
            title="add payment card"
            onPress={initAndPresentPaymentSheetHandler}
          />
        </View>
      </StripeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 150,
    paddingHorizontal: 50,
  },
});
