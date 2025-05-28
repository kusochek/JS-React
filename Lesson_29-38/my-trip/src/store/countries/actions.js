import { createAction } from '@reduxjs/toolkit';
import { name } from './constants';

export const filterAction = createAction(`${name}/filterAction`);
