import { render, screen } from "@testing-library/react";
import{GitExpertApp} from '../src/gitExpertApp'


jest.mock("../src/config/apiKey", () => ({
    __esModule: true,
    default: "mocked_api_key",
  }));

describe('git expert app test', () => { 

    test('should render the app and match the snapshop', () => {
        const {container} = render(<GitExpertApp/>);
        expect(container).toMatchSnapshot();
    });
    test('should not return new categorie if it already exist', () => {
        const onAddCategory = jest.fn();
        const newCategory = 'Dragon Ball';
        const categories = ['One Punch', 'Death Note', 'Dragon Ball'];
        render(<GitExpertApp/>);
        expect(onAddCategory).not.toHaveBeenCalled();

        

    });
    

    
})