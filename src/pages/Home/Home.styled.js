import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../variables';

export const Wrap = styled.div`
  @media screen and (max-width: 960px){
    margin-top: ${HEADER_HEIGHT};
  }
`