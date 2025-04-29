import styled from 'styled-components';

export const StyledTripDetails = styled.div`
  height: 100%;
  max-height: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
`;

export const Content = styled.div`
  padding: 30px 0;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin: 20px 0;
  color: #555;
  line-height: 1.6;
  text-align: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  text-align: center;
`;

export const Duration = styled.div`
  font-size: 1rem;
`;

export const System = styled.div`
  font-size: 1rem;
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
  margin-top: 12px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

export const BackButton = styled.button`
  background: transparent;
  color: #0077ff;
  border: 2px solid #0077ff;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    background: #0077ff;
    color: white;
  }
`;

export const BuyButton = styled.button`
  background: #0077ff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: #005fcc;
  }
`;
