import resources from '@/services/resources';

export default function checkLogin () {
  return resources.login.check();
}
