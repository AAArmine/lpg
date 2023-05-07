import {
  EMPTY_ONLINE_SOURCE_PROPSTACK_ID,
  PROPSTACK_ONLINE_SOURCES,
  UNDEFINED_ONLINE_SOURCE_PROPSTACK_ID,
} from '../../onlineSources';

/* eslint-disable @typescript-eslint/no-use-before-define */
export const parseClientSource = (
  onlineSource: string | null
): Record<string, number> => ({
  client_source_id: getOnlineSource(onlineSource),
});

const getOnlineSource = (source: string | null): number => {
  const definedSource = PROPSTACK_ONLINE_SOURCES.find(
    ({ name }) => name === source
  );

  if (definedSource) {
    return definedSource.propStackId;
  }

  return source
    ? UNDEFINED_ONLINE_SOURCE_PROPSTACK_ID
    : EMPTY_ONLINE_SOURCE_PROPSTACK_ID;
};
