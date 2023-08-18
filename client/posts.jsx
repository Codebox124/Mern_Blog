import img1 from "./src/assets/Photography 2.png"
import { Link } from "react-router-dom";

export default function Post(){
    return(
        <div className="post">
        <div className="image">
          <Link to=''>
            <img src={img1} alt=""/>
          </Link>
        </div>
        <div className="texts">
          <Link to=''>
          <h2>Hello world</h2>
          </Link>
          <p className="info">
            <a className="author">Codebox</a>
            <time>3:30pm</time>
          </p>
          <p className="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi aut dolorum deserunt tempora maxime vero itaque eius rem. Sequi quia error totam rerum perferendis itaque?</p>
        </div>
      </div>
        // <div className="flex my-10 ">
        //     <div className="mx-4">
        //         <img src={img1} alt="" />

        //     </div>
        //     <div className="">
        //         <div>
        //             <h2 className="text-3xl text-slate-800 font-bold">Hello people</h2>
        //         </div>
        //         <div>
        //             <span className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore veniam et eius sint ullam.</span>
        //         </div>
        //         <div>
        //             <span className="text-4xl">by Roqeeb</span>
        //         </div>
        //     </div>
        // </div>
    );
}