import React from 'react';
import { toast } from 'react-toastify';
import { ToastContentError, ToastContentSuccess } from '../components';

export const toastSuccess = text => {
  return toast.success(<ToastContentSuccess>{text}</ToastContentSuccess>);
};

export const toastNewToolSuccess = (text, tool) => {
  return toast.success(
    <ToastContentSuccess func="handleViewModal" params={[tool, true]}>
      {text}
    </ToastContentSuccess>
  );
};

export const toastRemovedToolSuccess = (text, tool) => {
  return toast.success(
    <ToastContentSuccess func="handleRemovedModal" params={[tool, true]}>
      {text}
    </ToastContentSuccess>
  );
};

export const toastError = text => {
  return toast.error(<ToastContentError>{text}</ToastContentError>);
};

export const toastNewToolError = (text, tool) => {
  return toast.error(
    <ToastContentError func="handleFormModal" params={[tool, true, true]}>
      {text}
    </ToastContentError>
  );
};
