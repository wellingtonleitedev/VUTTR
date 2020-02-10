import styled from 'styled-components';
import 'antd/lib/tag/style/index.css';
import Input from 'antd/lib/input';
import AntdTag from 'antd/lib/tag';

export const Container = styled.div`
  align-items: center;
  display: flex;

  svg {
    vertical-align: middle;
  }
`;

export const NewTag = styled(AntdTag)`
  background-color: #fff;
  border-style: dashed;
`;

export const InputNewTag = styled(Input)`
  background-color: transparent;
  height: 18px;
  margin: 0 !important;
  outline: auto;
  outline-color: #365df0;
  padding: 0 2px !important;
  width: 78px;
`;

export const Tags = styled.ul`
  align-items: center;
  background-color: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding: 5px;
`;

export const Tag = styled(AntdTag)`
  background-color: #365df0 !important;
  color: #fff !important;

  svg {
    color: #fff;
  }
`;
