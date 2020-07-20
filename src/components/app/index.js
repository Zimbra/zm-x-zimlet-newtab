import { createElement, Component } from 'preact';
import { Button } from '@zimbra-client/blocks';
import style from './style';
// Can also use shimmed decorators like graphql or withText.
// Or, utils, like callWtih. Refer to zm-x-web, zimbraManager/shims.js
// More shims can be added here if necessary; also requires an update to zimlet-cli

export default class App extends Component {
	handleClick = () => console.log('Test!');

	render() {
		return <Button onClick={this.handleClick}>Test!</Button>;
	}
}
