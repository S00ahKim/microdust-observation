import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
        <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
            className = 'carousel'>
            <Carousel.Item className='c-item'>
                <p> 외출은 가급적 자제하세요. <br/> 대기오염이 심한 도로변과 공사장은 피하고, 대중교통을 이용하세요.</p>
            </Carousel.Item>
            <Carousel.Item className='c-item'>
                <p> 외출시 식약청 인증 마스크를 착용하세요. <br/> 식약청 인증 마스크에는 'KF94', 'KF80' 표시가 되어 있습니다. 제조일로부터 36개월 이내인 제품을 사용하세요.</p>
            </Carousel.Item>
            <Carousel.Item className='c-item'>
                <p> 집에 돌아오면 깨끗이 몸을 씻으세요. <br/> 물과 비타민 C가 풍부한 과일과 야채 섭취를 권장합니다. 실내외 오염도를 고려하여 환기하고, 물걸레질 등 물청소를 해주세요.</p>
            </Carousel.Item>
        </Carousel>
    );
  }
}

export default ControlledCarousel;