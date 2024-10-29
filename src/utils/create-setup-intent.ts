import axios from "axios";

export interface IServerResponse {
  success: boolean;
  message: string;
  resource: {
    setupIntentClientSecret: string;
  } | null;
}
export interface IResponseSetupIntent {
  success: boolean;
  message: string;
  setupIntentClientSecret: string | null;
}

interface IParams {
  userId: string;
  paymentMethodId: string;
}

export const createSetupIntent = async (
  params: IParams
): Promise<IResponseSetupIntent> => {
  try {
    const { data } = await axios({
      method: "post",
      url: "/stripe-setup-intent/create-with-payment-method",
      data: {
        userId: params.userId,
        paymentMethodId: params.paymentMethodId,
      },
      headers: {
        "Content-type": "application/json",
      },
    });

    return {
      success: data.success,
      message: data.message,
      setupIntentClientSecret: data.resource?.setupIntentClientSecret as string,
    };

    //
  } catch (error) {
    const errorMessage =
      error.response && error.response.data
        ? error.response.data.message
        : error.message;
    return {
      success: false,
      message: `${error.response.status} : ${errorMessage}`,
      setupIntentClientSecret: null,
    };
  }
};
