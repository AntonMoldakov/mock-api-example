export const TagTypes = {
  api: 'api',
};

export type ErrorPayload = {
  data: { error: string; statusCode: number; message: string };
  status: number;
};
