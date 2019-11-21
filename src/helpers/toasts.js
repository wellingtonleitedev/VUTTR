import React from 'react';
import { toast } from 'react-toastify';
import { ToastContentError, ToastContentSuccess } from '../components';

export const toastSuccess = text => {
  return toast.success(<ToastContentSuccess>{text}</ToastContentSuccess>);
};

export const toastError = text => {
  return toast.error(<ToastContentError>{text}</ToastContentError>);
};
