import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse, isAxiosError } from "axios";
import { RootState } from "src/store";

export type ThunkOptions = {
  thunkOptions?: {
    isForce?: boolean;
    ignoreFeedbackGlobal?: boolean;
    dontRetryRequest?: boolean;
  };
};

export type RejectWithValue = {
  status: number | undefined;
  data: any;
};
interface AsyncThunkOptions<T> {
  condition?: (
    req: T,
    state: { getState: () => RootState; extra: any }
  ) => boolean | undefined;
}

const asyncThunk = function <Req = unknown, ErrorResParams = RejectWithValue>(
  typePrefix: string,
  request: (data: Req) => Promise<AxiosResponse<any>>,
  options?: AsyncThunkOptions<Req & ThunkOptions>
) {
  return createAsyncThunk<
    any,
    Req & ThunkOptions,
    { rejectValue: ErrorResParams }
  >(
    typePrefix,
    async (requestData: Req & ThunkOptions, { rejectWithValue }) => {
      const dontRetryRequest = requestData.thunkOptions?.dontRetryRequest;
      const retryLimit = 2;

      const handleRequest = async (counter: number): Promise<undefined> => {
        try {
          const response = await request(requestData);

          return response?.data;
        } catch (err) {
          //   if (
          //     err?.config?.method === "get" &&
          //     !dontRetryRequest &&
          //     counter !== retryLimit
          //   ) {
          //     return handleRequest(counter + 1);
          //   } else {
          //     if (err.response) {
          //       return rejectWithValue({
          //         status: err.response?.status,
          //         data: err?.response?.data,
          //         // eslint-disable-next-line @typescript-eslint/no-explicit-any
          //       } as any) as any;
          //     } else {
          //       return rejectWithValue({
          //         message: err?.message,
          //         isAxiosError: err?.isAxiosError,
          //       } as any) as any;
          //     }
          //   }
        }
      };

      return handleRequest(0);
    },
    {
      condition: options?.condition,
    }
  );
};

export default asyncThunk;
