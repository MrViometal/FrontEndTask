import React from 'react';
import styled from 'styled-components';
import { getValuesByFields } from '../../utilities/getValuesByField';
import { useHistory } from 'react-router-dom';
import {
  desktopView,
  mobileView,
  tabletView
} from '../../constants/stylingVariables';
import { darkThemeArrow, lightThemeArrow } from '../../svgs';
import useTheme from '../../hooks/themeContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px;
  width: 80%;

  @media (max-width: ${tabletView}) {
    margin: 20px;
    width: 90%;
  }

  @media (max-width: ${mobileView}) {
    margin: 20px 0px;
    width: 100%;
  }
`;

const BackButton = styled.button`
  width: 150px;
  padding: 10px;
  background-color: ${props => props.theme.elementsBG};
  border: none;
  box-shadow: 0 0px 18px -3px ${props => props.theme.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  #back-arrow {
    margin-right: 15px;
    margin-left: -20px;
    width: 20px;
  }

  @media (max-width: ${mobileView}) {
    width: 120px;
    padding: 8px;
  }
`;

const CountryContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;

  .flag {
    flex: 1;
    img {
      width: 550px;
      object-fit: cover;
    }
  }

  .details {
    margin: auto 0;
    padding: 0 20px;
    flex: 1;

    #name {
      font-size: 32px;
      font-weight: 600;
    }

    #columns-container {
      display: flex;
      flex-direction: row;
    }

    .details-field {
      font-size: 16px;
    }

    .title {
      font-weight: 800;
    }
  }

  @media (max-width: ${desktopView}) {
    .flag > img {
      width: 450px;
    }
  }

  @media (max-width: ${tabletView}) {
    .flag > img {
      width: 100%;
    }

    .details {
      padding: 0;

      #name {
        font-size: 22px;
        font-weight: 600;
      }

      .details-field {
        font-size: 12px;
      }
    }
  }

  @media (max-width: ${mobileView}) {
    margin-top: 40px;
    flex-direction: column;

    .flag {
      margin-bottom: 30px;
    }
    .details {
      #columns-container {
        flex-direction: column;
      }

      .details-field {
        font-size: 14px;
      }
    }
  }
`;

const DetailsColumns = styled.div`
  flex: 1;

  @media (max-width: ${tabletView}) {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const LeftColumn = ({ nativeName, population, region, subregion, capital }) => {
  return (
    <DetailsColumns>
      <p id='nativeName' className='details-field'>
        <span className='title'>Native Name: </span>
        {nativeName}
      </p>
      <p id='population' className='details-field'>
        <span className='title'>Population: </span>
        {population}
      </p>
      <p id='region' className='details-field'>
        <span className='title'>Region: </span>
        {region}
      </p>
      <p id='subregion' className='details-field'>
        <span className='title'>Sub Region: </span>
        {subregion}
      </p>
      <p id='capital' className='details-field'>
        <span className='title'>Capital: </span>
        {capital}
      </p>
    </DetailsColumns>
  );
};

const RightColumn = ({ topLevelDomain, currencies, languages }) => {
  return (
    <DetailsColumns>
      <p id='top-level-domain' className='details-field'>
        <span className='title'>Top Level Domain: </span>
        {topLevelDomain}
      </p>
      <p id='currencies' className='details-field'>
        <span className='title'>Currencies: </span>
        {getValuesByFields(currencies, 'name')}
      </p>
      <p id='languages' className='details-field'>
        <span className='title'>Languages: </span>
        {getValuesByFields(languages, 'name')}
      </p>
    </DetailsColumns>
  );
};

const SingleCountry = ({ country }) => {
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages
  } = country;

  const history = useHistory();
  const isLightTheme = useTheme();

  return (
    <Container>
      <BackButton id='back-button' onClick={() => history.goBack()}>
        <img
          id='back-arrow'
          alt='back-arrow'
          src={isLightTheme ? lightThemeArrow : darkThemeArrow}
        />
        Back
      </BackButton>
      <CountryContentContainer id='country-content-container'>
        <div id='flag' className='flag'>
          <img id='flag-img' src={flag} alt='country-flag' />
        </div>
        <div id='details' className='details'>
          <h1 id='name'>{name}</h1>

          <div id='columns-container'>
            <LeftColumn
              nativeName={nativeName}
              population={population}
              region={region}
              subregion={subregion}
              capital={capital}
            />

            <RightColumn
              topLevelDomain={topLevelDomain}
              currencies={currencies}
              languages={languages}
            />
          </div>
        </div>
      </CountryContentContainer>
    </Container>
  );
};

export default React.memo(SingleCountry);