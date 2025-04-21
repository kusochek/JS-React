import styled from 'styled-components';

export const StyledCard = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;
  min-width: 320px;
  width: 320px;
  padding: 30px;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  margin: 8px 0 16px;
  color: #555;
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  background: #0077ff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #005fcc;
  }
`;
