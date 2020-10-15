import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Image, Flag } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Image src="https://seeklogo.com/images/S/Stussy-logo-1839D43DEE-seeklogo.com.png" width="40px" height="40px" left/>
          <Menu.Item>MENS</Menu.Item>
          <Menu.Item fitted>WOMENS</Menu.Item>
          <Menu.Item>ACCESSORIES</Menu.Item>
          <Menu.Item fitted>COLLECTIONS</Menu.Item>
          <Menu.Item position="right">SEARCH</Menu.Item>
          <Menu.Item fitted>ACCOUNT</Menu.Item>
          <Menu.Item>FEATURES</Menu.Item>
          <Menu.Item fitted>SHOPPING BAG</Menu.Item>
          <Menu.Item><Flag name="us"/></Menu.Item>
        </Menu>
    )
  }
}

class StussyImages extends React.Component {
  render() {
    return (
        <Container>
          <Image className="image1">
            <Image floated="left"
                   src="http://cdn.shopify.com/s/files/1/0087/6193/3920/files/Mens_New_300x300.jpg?v=1602182790"
                   data-src="//cdn.shopify.com/s/files/1/0087/6193/3920/files/Mens_New_{width}x.jpg?v=1602182790"
                   data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                   data-aspectratio="0.8042895442359249"
                   data-sizes="auto" width="450px" height="500px" />
            <Image className="image2"
                   src="http://cdn.shopify.com/s/files/1/0087/6193/3920/files/Hoodies_63d8c83f-39a2-45cd-9421-4102b918bcfb_300x300.jpg?v=1602112180"
                   data-src="//cdn.shopify.com/s/files/1/0087/6193/3920/files/Hoodies_63d8c83f-39a2-45cd-9421-4102b918bcfb_{width}x.jpg?v=1602112180"
                   data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                   data-aspectratio="0.8042895442359249"
                   data-sizes="auto" width="450px" height="500px" />
          </Image>
          <Image className="image3"
                 src="//cdn.shopify.com/s/files/1/0087/6193/3920/files/FA20_Campaign_Tee_300x300.jpg?v=1602182536"
                 data-src="//cdn.shopify.com/s/files/1/0087/6193/3920/files/FA20_Campaign_Tee_{width}x.jpg?v=1602182536"
                 data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                 data-aspectratio="0.8042895442359249"
                 data-sizes="auto"
                 width="400px" height="400px"/>

          <Image className="image1">
            <Image floated="left"
                   src="//cdn.shopify.com/s/files/1/0087/6193/3920/files/Womens-New_5d6e684b-1b09-4310-80cb-e6e986db273d_300x300.jpg?v=1602112218"
                   data-src="//cdn.shopify.com/s/files/1/0087/6193/3920/files/Womens-New_5d6e684b-1b09-4310-80cb-e6e986db273d_{width}x.jpg?v=1602112218"
                   data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                   data-aspectratio="0.8042895442359249"
                   data-sizes="auto" width="450px" height="500px" />
            <Image className="image2"
                   src="//cdn.shopify.com/s/files/1/0087/6193/3920/files/Jackets_91400953-15af-486c-92ac-b52dabd06a48_300x300.jpg?v=1602182820"
                   data-src="//cdn.shopify.com/s/files/1/0087/6193/3920/files/Jackets_91400953-15af-486c-92ac-b52dabd06a48_{width}x.jpg?v=1602182820"
                   data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                   data-aspectratio="0.8042895442359249"
                   data-sizes="auto" width="450px" height="500px" />
          </Image>
        </Container>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
                <Menu borderless className="footer">
                  <Menu.Item position="right" fitted><Icon name="instagram" /></Menu.Item>
                  <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
                  <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
                  <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
                  <Menu.Item fitted><Icon name="vimeo" /></Menu.Item>
                  <Menu.Item fitted><Icon name="youtube" /></Menu.Item>
                  <Menu.Item fitted><Icon name="wechat" /></Menu.Item>
                  <Menu.Item fitted><Icon name="weibo" /></Menu.Item>
                </Menu>
        </div>
    )
  }
}

class Stussy extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <StussyImages/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Stussy />, document.getElementById('root'));
