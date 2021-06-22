import React, {useEffect, useState} from "react"
import {Header, Services, Table, Map, Statistic, Schedule, Footer, Button} from "./components/";

import {GlobalStyles} from "./theme/globalStyles";

import styled, { ThemeProvider } from "styled-components";
import {useTheme} from './theme/useTheme'
import ThemeSelector from './theme/ThemeSelector';
//https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
//https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/

const AppStyle = styled.div`
.container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 20px;
  overflow: hidden;
  @media (max-width: 480px) {
    padding: 10px;
  }
}

.section__title {
  // color: #dbd9d9;
  font-size: 20px;
  margin-bottom: 10px;
}

  .btn-section {
  padding: 15px;
  border: 1px solid #414142;
  margin-bottom: 70px;
  @media (max-width: 768px) {
    margin-bottom: 55px;
  }
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
  button {
    display: block;
    margin: 0 auto;
  }
}
`

const App = () => {
    const {theme, themeLoaded
        // , getFonts
    } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => {
        setSelectedTheme(theme);
    }, [themeLoaded]);


    return (
        <>
            {
                themeLoaded && <ThemeProvider theme={selectedTheme}>
                    <GlobalStyles/>
                    <AppStyle>
                        <div className="container">
                            <Header />
                            <Statistic/>
                            <Table/>
                            <Services/>
                            <Map/>
                            <Schedule/>
                            <div className="btn-section">
                                <Button />
                            </div>
                            < Footer/>
                            <ThemeSelector setter={ setSelectedTheme }
                                           // newTheme={ newTheme }
                            />
                        </div>
                    </AppStyle>
                </ThemeProvider>
            }
        </>
    );
}

export default App;
