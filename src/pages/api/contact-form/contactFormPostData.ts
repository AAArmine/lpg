export interface ContactFormPostData {
  formType: 'information' | 'offer';
  requestId: string;
  onlineSource: string | null;
  request: Array<Record<string, any>>;
}
