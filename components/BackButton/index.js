import { useRouter } from "next/navigation";
import styled from "styled-components";

import Back from "/public/assets/icons/back.svg"

export default function BackButton() {
  const router = useRouter();

  return (
    <StyledBackButton type="button" onClick={() => router.back()} aria-label="back button">
      <Back alt="back" width={48} height={48}/>
    </StyledBackButton>
  );
}

const StyledBackButton = styled.button`
  border: none;
  cursor: pointer;
  display: block;
  align-content: center;
  align-items: center;
  margin: 10px;

  height: 60px;
  width: 60px;
  border-radius: 50px;

  color: var(--background-foreground);
  background-color: var(--primary);

  transform: translateY(0);
  transition: transform 0.3s ease;

  &:hover {
    background-color: var(--accent);
    color: var(--color);

    box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
    transition: transform 0.3s ease;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.33);
    transition: transform 0.3s ease;
  }
`;
