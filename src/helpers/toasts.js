import React from 'react';
import { toast } from 'react-toastify';
import { ToastContentError, ToastContentSuccess } from '../components';
import { ToastNewTool } from '../components/ToastNewTool';
import { ToastRemovedTool } from '../components/ToastRemovedTool';

export const toastSuccess = text => {
  return toast.success(<ToastContentSuccess>{text}</ToastContentSuccess>);
};

export const toastNewToolSuccess = (text, tool) => {
  return toast.success(<ToastNewTool tool={tool}>{text}</ToastNewTool>);
};

export const toastRemovedToolSuccess = (text, tool) => {
  return toast.success(<ToastRemovedTool tool={tool}>{text}</ToastRemovedTool>);
};

export const toastError = text => {
  return toast.error(<ToastContentError>{text}</ToastContentError>);
};
