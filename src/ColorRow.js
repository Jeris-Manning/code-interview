import styled from "styled-components";

const ColorRow = ({ testTheme }) => {
  console.log(testTheme);
  return (
    <BoxDiv>
      {testTheme &&
        testTheme.map((value, idx) => (
          <ColorBox
            key={idx}
            color={`rgb(${value[0]},${value[1]},${value[2]})`}
          />
        ))}
    </BoxDiv>
  );
};

const BoxDiv = styled.div`
  display: flex;
`;

const ColorBox = styled.div`
  background-color: ${(p) => p.color};
  width: 20px;
  height: 20px;
  margin: 5px;
`;

export default ColorRow;
