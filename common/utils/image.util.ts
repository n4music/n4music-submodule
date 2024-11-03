import { cfg } from 'submodules/config/env.config';

export function addUrlImage(imageId: string): string {
  return `${cfg('FILE_CDN_URL')}/${imageId}`;
}
