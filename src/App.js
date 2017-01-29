import React, { Component } from "react";
import styled from "styled-components";
import { media } from "./style-utils";
import Header from "./Header";
import Text from "./Text";
import ErrorAlert from "./ErrorAlert";
import Bar from "./Bar";
import Controls from "./Controls";

const barsEndpoint = process.env.REACT_APP_BARS_ENDPOINT;

const Wrapper = styled.div`
  text-align: center;
`;

const Hr = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Loading = styled.div`
  padding: 1rem;
  background: #eaeaea;
  opacity: 0.5;
`;

const Bars = styled.div`
  padding: 1rem;
  ${media.small`
    padding: 1rem 0;
    width: 80%;
    margin-left: 10%;
  `}
  ${media.medium`
    padding: 1rem 0;
    width: 60%;
    margin-left: 20%;
  `}
  ${media.large`
    width: 60%;
    margin-left: 20%;
  `}
  ${media.xlarge`
    width: 50%;
    margin-left: 25%;
  `}
`;

const BarWrapper = styled.div`
  margin-bottom: 1rem;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { barsRequest: {}, bars: [], buttons: [], activeBar: -1 };

    this.handleActiveBarChange = this.handleActiveBarChange.bind(this);
    this.handleDeltaChange = this.handleDeltaChange.bind(this);
  }

  componentDidMount() {
    this.load();
  }

  load() {
    const { barsRequest } = this.state;
    this.setState({ barsRequest: { ...barsRequest, isFetching: true } });

    const always = () => {
      const { barsRequest } = this.state;
      this.setState({ barsRequest: { ...barsRequest, isFetching: false } });
    };

    return fetch(barsEndpoint, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(resp => {
        if (resp.status !== 200) {
          return Promise.reject(resp);
        }
        return resp.json();
      })
      .then(res => {
        const { buttons, bars, limit } = res;
        const activeBar = bars.length > 0 ? 0 : -1;
        this.setState({ buttons, bars, limit, activeBar });
      })
      .then(always, res => {
        const error = { message: "Failed to fetch bars." };
        this.setState({ barsRequest: { ...barsRequest, error } });
      });
  }

  handleActiveBarChange(newBar) {
    this.setState({ activeBar: newBar });
  }

  handleDeltaChange(delta) {
    const { bars, activeBar } = this.state;

    this.setState({
      bars: bars.map((b, i) => {
        if (i !== activeBar) {
          return b;
        }
        const newVal = b + delta;
        if (newVal < 0) {
          return 0;
        }
        return newVal;
      })
    });
  }

  render() {
    const { barsRequest, buttons, bars, limit, activeBar } = this.state;
    const { isFetching, error } = barsRequest;

    return (
      <Wrapper>
        <Header />
        {isFetching && <Loading>Loading...</Loading>}
        {!isFetching && error && <ErrorAlert message={error.message} />}
        {
          !isFetching && !error && (
              <Bars>
                {bars.map((b, i) => {
                  return (
                    <BarWrapper key={i}>
                      <Bar value={b} limit={limit} />
                    </BarWrapper>
                  );
                })}
                <Controls
                  activeBar={activeBar}
                  bars={bars}
                  buttons={buttons}
                  onActiveBarChange={this.handleActiveBarChange}
                  onDeltaChange={this.handleDeltaChange}
                />
                <Hr />
                <Text>
                  {"The active bar has the value "}
                  <strong>{bars[activeBar]}</strong>
                  {"."}
                </Text>
                <Text>
                  {"The limit is "}
                  <strong>{limit}</strong>
                  {"."}
                </Text>
              </Bars>
            )
        }
      </Wrapper>
    );
  }
}

export default App;
