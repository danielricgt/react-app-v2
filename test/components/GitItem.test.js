import { render } from "@testing-library/react";
import { GitItem } from "../../src/components/GitItem";


describe('test on gitItem', () => { 

    test('must to do match with the snapshop', () => {
        const title = 'Yes jest';
        const url = 'http://google.com';
        const {container} = render(<GitItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });
    

 })

//  export const GitItem = ({title, url}) => {

//     //  console.log(title, url);
//    return (
//       <div className="card" >
 
//          <img src={url} alt={title} />
//          <p>{title}</p>
 
//       </div>
//    )
//  }
 