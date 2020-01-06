// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assertSingletonPackage } from '@polkadot/util';

import keyring, { Keyring } from './Keyring';
import Ledger from './ledger';

assertSingletonPackage('@polkadot/ui-keyring');

export default keyring;

export {
  Keyring,
  Ledger
};
