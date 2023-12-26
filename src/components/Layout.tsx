import { FC } from "react";
import { Link, Outlet } from "react-router-dom";


export const Layout: FC = () => {

    return<>
     <header>
        <nav>
          <ul className="flex  items-center justify-start flex-wrap bg-pink-500 p-6">
            <li className="mr-6">
              <Link className="nav-link" to={"/"}>
                Add Question
              </Link>
            </li>
            <li className="mr-6">
              <Link className="nav-link" to={"top"}>
               Top Question
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </header></>

}