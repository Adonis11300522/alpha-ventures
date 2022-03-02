import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AppContainer, BlackCard, Slogan } from "../tags/Tags";

const svg1 = () => {
  return (
    <svg preserveAspectRatio="xMidYMid meet" data-bbox="19.868 38.586 160.264 121.194" viewBox="19.868 38.586 160.264 121.194" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--nwh5olfmhw6"><defs><style></style></defs><title id="svgcid--nwh5olfmhw6"></title>
    <g>
        <path d="M149.73 83.547c-2.538-25.284-24.211-44.961-49.73-44.961S52.808 58.263 50.269 83.547c-17.67 3.837-30.401 19.54-30.401 37.674 0 21.261 17.297 38.559 38.559 38.559h83.146c21.261 0 38.559-17.297 38.559-38.559 0-18.135-12.732-33.838-30.402-37.674zm-8.157 64.423H58.427a26.755 26.755 0 0 1-16.198-5.482l21.237-21.114 13.181 13.19 36.505-35.875 8.081 8.047 6.076-30.357-30.353 6.177 8.281 8.243-28.512 28.025-13.236-13.239-28.56 28.399a26.646 26.646 0 0 1-3.252-12.763c0-13.887 10.85-25.598 24.701-26.661l5.452-.419v-5.488l-.003-.16C61.868 67.486 78.992 50.395 100 50.395c21.047 0 38.171 17.078 38.172 38.069l-.004 5.677 5.453.419c13.851 1.063 24.701 12.774 24.701 26.661 0 14.749-11.999 26.749-26.749 26.749z" fill="#FD6262" data-color="1"></path>
    </g>
</svg>
  )
}

export function Section1() {
  return (
    <AppContainer className="Section1">
        <Container>
            <Slogan>join the innovation of<br/> the ecosystem</Slogan>
            <h3 className="mt-5 mb-5">decentralized autonomous ventures</h3>
            <Button className="fill-btn mt-5 mb-5">LaunchApp</Button>
        </Container>
    </AppContainer>
  );
}

export function Section2(){
  return (
    <AppContainer className="Section2">
       <Container>
        <Row className="parent-row">
            <Col xs lg="5">
              <h3 className="mb-4">accelerate your<br/>investments from the<br/>ground floor up</h3>
              <p>At Alpha Ventures, we strive to create an opportunity for the everyday investor to have a voice in the growth of the blockchain, crypto and ai sector</p>
            </Col>
            <Col xs lg="7">
              <Row>
                <Col>
                  <BlackCard card_title="AI & Blockchain Specialization " card_text="Investments are allocated to emerging AI and Blockchain start-up companies.">
                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="19.868 38.586 160.264 121.194" viewBox="19.868 38.586 160.264 121.194" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--nwh5olfmhw6"><defs><style></style></defs><title id="svgcid--nwh5olfmhw6"></title>
                        <g><path d="M149.73 83.547c-2.538-25.284-24.211-44.961-49.73-44.961S52.808 58.263 50.269 83.547c-17.67 3.837-30.401 19.54-30.401 37.674 0 21.261 17.297 38.559 38.559 38.559h83.146c21.261 0 38.559-17.297 38.559-38.559 0-18.135-12.732-33.838-30.402-37.674zm-8.157 64.423H58.427a26.755 26.755 0 0 1-16.198-5.482l21.237-21.114 13.181 13.19 36.505-35.875 8.081 8.047 6.076-30.357-30.353 6.177 8.281 8.243-28.512 28.025-13.236-13.239-28.56 28.399a26.646 26.646 0 0 1-3.252-12.763c0-13.887 10.85-25.598 24.701-26.661l5.452-.419v-5.488l-.003-.16C61.868 67.486 78.992 50.395 100 50.395c21.047 0 38.171 17.078 38.172 38.069l-.004 5.677 5.453.419c13.851 1.063 24.701 12.774 24.701 26.661 0 14.749-11.999 26.749-26.749 26.749z" fill="#FD6262" data-color="1"></path></g>
                    </svg>
                  </BlackCard> 
                  <BlackCard card_title="Shareholder Voting" card_text="Shareholders get to vote on the direction of certain investments through a DAO structure.">
                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.532 45.947 158.928 108.107" viewBox="20.532 45.947 158.928 108.107" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--h1ehet-y5ba3v"><defs><style></style></defs><title id="svgcid--h1ehet-y5ba3v"></title>
                        <g>
                            <path d="M82.935 75.852l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.828 4.828 0 0 0 0-8.768l-44.836-20.692a4.826 4.826 0 0 0-4.047 0L82.935 67.083a4.828 4.828 0 0 0 0 8.769zm46.86-19.759l33.312 15.374-33.312 15.374-33.312-15.374 33.312-15.374z" fill="#FD6262" data-color="1"></path>
                            <path d="M172.608 95.616l-42.813 19.758-42.813-19.758a4.83 4.83 0 0 0-4.047 8.769l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.83 4.83 0 0 0-4.047-8.769z" fill="#FD6262" data-color="1"></path>
                            <path d="M172.608 124.149l-42.813 19.758-42.813-19.758a4.828 4.828 0 1 0-4.047 8.769l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.83 4.83 0 0 0-4.047-8.769z" fill="#FD6262" data-color="1"></path>
                            <path d="M65.095 95.171H25.368a4.829 4.829 0 1 0 0 9.658h39.727a4.829 4.829 0 1 0 0-9.658z" fill="#FD6262" data-color="1"></path>
                            <path d="M65.095 76.446H37.44a4.829 4.829 0 1 0 0 9.658h27.655a4.829 4.829 0 1 0 0-9.658z" fill="#FD6262" data-color="1"></path>
                            <path d="M65.095 113.897H49.512a4.829 4.829 0 1 0 0 9.658h15.583a4.829 4.829 0 1 0 0-9.658z" fill="#FD6262" data-color="1"></path>
                        </g>
                    </svg>
                  </BlackCard> 
                </Col>
                <Col>
                  <BlackCard card_title="Decentralized Funding " card_text="Treasury capital is funded through a tax on token transactions, with no pre-allocated supply. ">
                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.42 48.257 159.16 103.485" viewBox="20.42 48.257 159.16 103.485" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-aambnh-jzfmaj"><defs><style></style></defs><title id="svgcid-aambnh-jzfmaj"></title>
                        <g>
                            <path d="M177.118 96.151L142.48 80.165a4.235 4.235 0 0 0-3.555 0l-34.637 15.986a4.252 4.252 0 0 0-2.464 3.849c0 1.648.967 3.159 2.463 3.85l34.638 15.986c.553.255 1.167.39 1.777.39.619 0 1.217-.131 1.778-.39l34.638-15.986c1.496-.691 2.462-2.202 2.462-3.85s-.967-3.159-2.462-3.849zM165.223 100l-24.521 11.316L116.181 100l24.52-11.316L165.223 100z" fill="#FD6262" data-color="1"></path>
                            <path d="M98.177 100a4.251 4.251 0 0 0-2.463-3.849L61.076 80.165a4.236 4.236 0 0 0-3.554 0L22.883 96.151c-1.496.691-2.463 2.202-2.463 3.849s.967 3.159 2.463 3.85l34.638 15.985a4.257 4.257 0 0 0 1.777.391c.619 0 1.216-.131 1.777-.39l34.638-15.986a4.253 4.253 0 0 0 2.464-3.85zm-14.358 0l-24.521 11.316L34.778 100l24.52-11.316L83.819 100z" fill="#FD6262" data-color="1"></path>
                            <path d="M63.585 72.333l34.638 15.985a4.257 4.257 0 0 0 1.777.391 4.21 4.21 0 0 0 1.777-.39l34.639-15.986a4.253 4.253 0 0 0 2.462-3.85 4.252 4.252 0 0 0-2.462-3.849l-34.639-15.986a4.236 4.236 0 0 0-3.554 0L63.585 64.634a4.253 4.253 0 0 0-2.463 3.849c0 1.648.966 3.159 2.463 3.85zm11.895-3.85L100 57.167l24.52 11.316L100 79.8 75.48 68.483z" fill="#FD6262" data-color="1"></path>
                            <path d="M136.417 127.667l-34.639-15.986a4.236 4.236 0 0 0-3.554 0l-34.639 15.986c-1.496.691-2.463 2.202-2.463 3.849s.967 3.159 2.463 3.85l34.638 15.985a4.257 4.257 0 0 0 1.777.391 4.21 4.21 0 0 0 1.777-.39l34.639-15.986c1.496-.691 2.462-2.202 2.462-3.85s-.966-3.158-2.461-3.849zm-11.897 3.85L100 142.833l-24.52-11.316L100 120.2l24.52 11.317z" fill="#FD6262" data-color="1"></path>
                        </g>
                    </svg>
                  </BlackCard> 
                  <BlackCard card_title="Investor Portfolio Analytics" card_text="Investor portfolio application with full ROI analytic capabilities. Track your dividends paid in $ETH.">
                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.124 26.752 159.752 146.495" viewBox="20.124 26.752 159.752 146.495" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--9l1bda-esadt6"><defs><style></style></defs><title id="svgcid--9l1bda-esadt6"></title>
                        <g>
                            <path d="M117.275 125.299c8.267-5.705 13.161-14.963 13.161-25.039 0-16.782-13.653-30.435-30.435-30.435S69.566 83.478 69.566 100.26c0 10.076 4.892 19.333 13.159 25.039-17.083 6.994-28.462 23.834-28.462 42.343v5.605h91.474v-5.605c0-18.509-11.38-35.349-28.462-42.343zm-17.274-5.814c-10.6 0-19.225-8.624-19.225-19.225 0-10.6 8.625-19.224 19.225-19.224s19.225 8.624 19.225 19.224c0 10.601-8.625 19.225-19.225 19.225zm-34.074 42.552c2.713-16.546 17.215-28.921 34.074-28.921 16.857 0 31.36 12.375 34.072 28.921H65.927z" fill="#FD6262" data-color="1"></path>
                            <path d="M100.001 62.03c9.726 0 17.639-7.913 17.639-17.639 0-9.726-7.913-17.639-17.639-17.639-9.727 0-17.64 7.913-17.64 17.639 0 9.726 7.912 17.639 17.64 17.639zm-6.429-17.639a6.435 6.435 0 0 1 6.429-6.428 6.435 6.435 0 0 1 6.428 6.428 6.435 6.435 0 0 1-6.428 6.429 6.437 6.437 0 0 1-6.429-6.429z" fill="#FD6262" data-color="1"></path>
                            <path d="M37.764 101.971c-9.727 0-17.64 7.913-17.64 17.639 0 9.727 7.913 17.639 17.64 17.639 9.726 0 17.639-7.913 17.639-17.639 0-9.726-7.913-17.639-17.639-17.639zm6.428 17.639c0 3.545-2.883 6.429-6.428 6.429s-6.429-2.884-6.429-6.429c0-3.545 2.884-6.429 6.429-6.429s6.428 2.884 6.428 6.429z" fill="#FD6262" data-color="1"></path>
                            <path d="M162.236 101.971c-9.726 0-17.639 7.913-17.639 17.639 0 9.727 7.913 17.639 17.639 17.639 9.727 0 17.64-7.913 17.64-17.639 0-9.726-7.913-17.639-17.64-17.639zm6.429 17.639a6.436 6.436 0 0 1-6.429 6.429 6.435 6.435 0 0 1-6.428-6.429 6.435 6.435 0 0 1 6.428-6.429 6.437 6.437 0 0 1 6.429 6.429z" fill="#FD6262" data-color="1"></path>
                        </g>
                    </svg>
                  </BlackCard> 
                </Col> 
              </Row> 
            </Col>
          </Row>
       </Container>
    </AppContainer>
  );
}

export function Section3(){
  return (
    <AppContainer className="Section3">
      <Container>
        <Row className="parent-row">
          <Col xs lg="6">
            <h2>shareHolder oriented tokenomics</h2>
          </Col>
          <Col xs lg="6">
            <p>The AVC token supply was fair launched with 100% of the supply in circulation. Our investment and development teams have no pre-allocated supply.</p>
            <p>We aim to have faire tokenomics to our everyday shareholders, with no concerns of future westing to cause market dilution.</p>
          </Col>
        </Row>
      </Container>
    </AppContainer>
  );
}