import styled from "styled-components";

export const PageWrapper = styled.main`
  width: min(980px, calc(100% - 2rem));
  margin: 1.25rem auto;
  padding: 1.25rem;

  background: var(--background-ground);
  border-radius: 36px;
  box-shadow: 0px 6px 6px rgba(0, 5, 10, 0.25);

  display: grid;
  gap: 1.25rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--color);
`;

export const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

export const FormGroup = styled.label`
  display: grid;
  gap: 0.5rem;

  font-size: 1.19rem;
  font-weight: 600;
  color: var(--color);

  input {
    width: 100%;
    border: 2px solid transparent;
    outline: none;

    background: var(--mute);
    color: var(--color);

    border-radius: 18px;
    padding: 0.85rem 1rem;
    box-shadow: 0px 4px 6px rgba(0, 5, 10, 0.18);

    font-size: 1.05rem;
  }

  input:focus-visible {
    border-color: var(--accent);
  }

  input:hover {
    border-color: var(--background-foreground);
  }
`;

export const ErrorText = styled.p`
  margin: 0;
  color: var(--alert);
  font-weight: 600;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.25rem;
`;

export const SubmitButton = styled.button`
  border: 0;
  cursor: pointer;

  padding: 0.9rem 1.25rem;
  border-radius: 999px;

  background: var(--primary);
  color: var(--background-foreground);

  font-size: 1.1rem;
  font-weight: 700;

  transform: translateY(0);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.18);
  }
`;
