import React, { useEffect, useState } from "react";
import {
  StripeProvider as NativeStripeProvider,
  useStripe,
} from "@stripe/stripe-react-native";
import axios from "axios";

type StripeProviderProps = {
  children: JSX.Element | JSX.Element[];
};
type StripeParam = {
  publishableKey: string;
  merchantIdentifier: string;
};

////////////////////////////////////////

/**
 * Function to fetch stripe params to initialize stripe (THIS IS USED)
 */
export const fetchStripeParams = async () => {
  try {
    const { data } = await axios({
      method: "get",
      url: "/stripe-params",
      headers: {
        "Content-type": "application/json",
      },
    });

    return {
      success: data.success,
      message: data.message,
      resource: {
        publishableKey: data.resource.publishableKey,
        mercantIdentifier: data.resource.mercantIdentifier,
      },
    };
  } catch (error) {
    const errorMessage =
      error.response && error.response.data
        ? error.response.data.message
        : error.message;
    return {
      success: false,
      message: `${error.response.status} : ${errorMessage}`,
      resource: {
        publishableKey: null,
        mercantIdentifier: null,
      },
    };
  }
};

//////////////////////////////////////////////

const StripeProvider: React.FC<StripeProviderProps> = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [stripeParams, setStripeParams] = useState<StripeParam>({
    publishableKey: "",
    merchantIdentifier: "",
  });

  useEffect(() => {
    const fetchparams = async () => {
      const { success, message, resource } = await fetchStripeParams();
      if (success) {
        setStripeParams((prev) => ({
          publishableKey: resource.publishableKey,
          merchantIdentifier: resource.mercantIdentifier,
        }));
      } else {
        setErrorMessage(message);
      }
    };

    fetchparams();
  }, []);

  return (
    <NativeStripeProvider
      merchantIdentifier={stripeParams.merchantIdentifier}
      publishableKey={stripeParams.publishableKey}
      threeDSecureParams={{
        backgroundColor: "#d1a4a4",
        timeout: 5,
      }}
    >
      {children}
    </NativeStripeProvider>
  );
};

export default StripeProvider;
