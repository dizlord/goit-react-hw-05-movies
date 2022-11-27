import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Image = styled.img`
  width: 100%;
  height: 300px;
`;

export const OverviewTitle = styled.span`
  display: block;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Genre = styled.span`
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const NavItemMovies = styled(NavLink)`
  display: inline;
  padding: ${p => p.theme.space[3]}px;
  margin-right: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.green};

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;