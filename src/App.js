import { useState } from "react";
import { Button } from "./basics/Button";
import ColorRow from "./ColorRow";
import Layout from "./Layout";
import { THEME_DEFAULT } from "./theming";
import { getColors } from "./getColors";

export const App = () => {
  const [theme, setTheme] = useState(THEME_DEFAULT);
  const [testTheme, setTestTheme] = useState(null);
  const [test, setTest] = useState(null);
  const [applyTest, setApplyTest] = useState(false);

  const seeSwatch = async () => {
    getColors(setTestTheme);
  };

  const testSwatch = () => {
    if (!testTheme) return null;
    setTest({
      colors: {
        text: `rgb(${testTheme[0][0]}, ${testTheme[0][1]},${testTheme[0][2]})`,
        header: `rgb(${testTheme[1][0]}, ${testTheme[1][1]},${testTheme[1][2]})`,
        footer: `rgb(${testTheme[2][0]}, ${testTheme[2][1]},${testTheme[2][2]})`,
        background: `rgb(${testTheme[3][0]}, ${testTheme[3][1]},${testTheme[3][2]})`,
        button: `rgb(${testTheme[4][0]}, ${testTheme[4][1]},${testTheme[4][2]})`,
        buttonHover: "#ff5151",
        buttonActive: "#a60202"
      }
    });
    setApplyTest(true);

    setTimeout(() => {
      setApplyTest(false);
    }, 5000);
  };

  const applySwatch = () => {
    setTheme(test);
    setTestTheme(null);
  };

  return (
    <Layout
      theme={applyTest ? test : theme}
      header={`That's no way to get a header in life 😬`}
      footer={`A good footer is quite the... feet 🙄`}>
      <Button onClick={seeSwatch} text={`Get Random`} />

      <ColorRow testTheme={testTheme} />

      <Button onClick={testSwatch} text={`Try`} />

      <Button onClick={applySwatch} text={`Set`} />
    </Layout>
  );
};
