import { StyledNav } from 'components/Navigation/navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledNav to="/">Home</StyledNav>
        </li>
        <li>
          <StyledNav to="add">Add</StyledNav>
        </li>
      </ul>
    </nav>
  );
};
