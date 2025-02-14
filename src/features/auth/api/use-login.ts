import type { InferRequestType, InferResponseType } from "hono/client";
import { useMutation } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

const $post = client.api.auth.login.$post;

type RequestType = InferRequestType<typeof $post>;
type ResponseType = InferResponseType<typeof $post>;

export const useLogin = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await $post({ json });

      if (!response.ok) {
        throw new Error("登录失败");
      }

      console.log(response.json);
      return await response.json();
    },
    onError: () => {
      // An error happened!
      console.log(`rolling back optimistic update with id `);
    },
    onSuccess: () => {
      // Boom baby!
    },
  });

  return mutation;
};
