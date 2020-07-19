import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 15px;
`;

export const Header = styled.View`
  flex: 2;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

export const Body = styled.View`
  flex: 5;
`;

export const HeaderTop = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const AreaButton = styled.View`
  flex: 1;
  align-items: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const AreaInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: rgba(204, 204, 204, 0.5);
  margin-bottom: 10px;
`;

export const TextInfo = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const SubTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
