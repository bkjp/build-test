import {
  initPaymentSheet as nativeInitPaymentSheet,
  presentPaymentSheet as nativePresentPaymentSheet,
} from "@stripe/stripe-react-native";

export const initPaymentSheet = async (options: any) => {
  return await nativeInitPaymentSheet(options);
};

export const presentPaymentSheet = async () => {
  return await nativePresentPaymentSheet();
};
