import BreadcrumbArea from "@/components/breadcrumb-area";
import { BiPlusMedical } from "react-icons/bi";
import { BsQuestionSquareFill } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ImPrevious2, ImNext2 } from "react-icons/im";
import { LuRefreshCw } from "react-icons/lu";
import { MdClose, MdOutlineWatchLater } from "react-icons/md";
import {
  TbHexagonLetterAFilled,
  TbHexagonLetterPFilled,
  TbHexagonLetterCFilled,
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import styles from "@/styles/pages/suporte/soa/Soa.module.scss";

type SoaContents = {
  setActiveTab: (tab: "tab1" | "tab2") => void;
};

export default function SoaContents({ setActiveTab }: SoaContents) {
  return (
    <>
      <BreadcrumbArea>
        <div className={styles.soa__breadcrumb_area}>
          <h1>Solicitação de Atendimento</h1>
          <button
            className={styles.soa__breadcrumb_area__solicitation}
            onClick={() => setActiveTab("tab2")}
          >
            <span>
              <BiPlusMedical />
            </span>
            <span>Nova Solicitação</span>
          </button>
        </div>
      </BreadcrumbArea>
      <div className={styles.soa__contents}>
        <div className={styles.soa__actions}>
          <button>Pesquisa Avançada</button>
          <button>Janela de Detalhes</button>
        </div>

        <table className={styles.soa__table}>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Descrição</th>
              <th>Data</th>
              <th>Classificação</th>
              <th>Módulos</th>
              <th>Criado Por</th>
              <th>Previsão O.S</th>
              <th>Satisfação</th>
            </tr>
          </thead>
          <tbody>
            {/* inputs */}
            <tr>
              <td className={styles.soa__table__inputs}>
                <div className={styles.soa__table__inputsContens}>
                  <input type="text" />
                  <span>
                    <MdClose />
                  </span>
                </div>
              </td>
              <td className={styles.soa__table__inputs}>
                <div className={styles.soa__table__inputsContens}>
                  <input type="text" />
                  <span>
                    <MdClose />
                  </span>
                </div>
              </td>
              <td className={styles.soa__table__inputs}>
                <div className={styles.soa__table__inputsContens}>
                  <input type="text" />
                  <span>
                    <MdClose />
                  </span>
                </div>
              </td>
              <td className={styles.soa__table__inputs}>
                <div className={styles.soa__table__inputsContens}>
                  <input type="text" />
                  <span>
                    <MdClose />
                  </span>
                </div>
              </td>
              <td className={styles.soa__table__inputs}>
                <div className={styles.soa__table__inputsContens}>
                  <input type="text" />
                  <span>
                    <MdClose />
                  </span>
                </div>
              </td>
              <td className={styles.soa__table__inputs}>
                <div className={styles.soa__table__inputsContens}>
                  <input type="text" />
                  <span>
                    <MdClose />
                  </span>
                </div>
              </td>
              <td className={styles.soa__table__inputs}>
                <div className={styles.soa__table__inputsContens}>
                  <input type="text" />
                  <span>
                    <MdClose />
                  </span>
                </div>
              </td>
              <td className={styles.soa__table__inputs}></td>

              <td className={styles.soa__table__inputs}>
                <div className={styles.soa__table__inputsContens}>
                  <input type="text" />
                  <span>
                    <MdClose />
                  </span>
                </div>
              </td>
            </tr>

            {/* Datas */}
            <tr>
              <td>
                <span className="text-red-700">
                  <TbHexagonLetterAFilled />
                </span>
              </td>
              <td>aaa</td>
              <td>aaaaaaaaa</td>
              <td>aaaaaa</td>
              <td>aaaaaaa</td>
              <td>aaaaaa</td>
              <td>aaaaaa</td>
              <td>aaaaaaaaa</td>
              <td>
                <span className="text-gray-400">
                  <BsQuestionSquareFill />
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span className="text-red-700">
                  <TbHexagonLetterAFilled />
                </span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span className="text-gray-400">
                  <BsQuestionSquareFill />
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span className="text-red-700">
                  <FaQuestion />
                </span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span className="text-gray-400">
                  <BsQuestionSquareFill />
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span className="text-yellow-500">
                  <TbHexagonLetterPFilled />
                </span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span className="text-gray-400">
                  <BsQuestionSquareFill />
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span className="text-yellow-500">
                  <TbHexagonLetterPFilled />
                </span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span className="text-gray-400">
                  <BsQuestionSquareFill />
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span className="text-red-700">
                  <TbHexagonLetterAFilled />
                </span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span className="text-gray-400">
                  <BsQuestionSquareFill />
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span className="text-green-500">
                  <TbHexagonLetterCFilled />
                </span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span className="text-pink-800">
                  <BsQuestionSquareFill />
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span>
                  <MdOutlineWatchLater />
                </span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span className="text-gray-400">
                  <BsQuestionSquareFill />
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.soa__table__footer}>
          <div className={styles.soa__table__footer__pagination__refresh}>
            <span>
              <LuRefreshCw />
            </span>

            <button>
              <span>
                <FaArrowUpRightFromSquare />
              </span>
              <span>Selecionar Colunas</span>
            </button>
          </div>

          <div className={styles.soa__table__footer__pagination}>
            <div className={styles.soa__table__footer__pagination__btn}>
              <button>
                <ImPrevious2 />
              </button>
              <button>
                <TbPlayerTrackPrevFilled />
              </button>
            </div>

            <div className={styles.soa__table__footer__pagination__currentPage}>
              <p>Página </p>
              <p>1</p>
              <p>de 20</p>
            </div>

            <div className={styles.soa__table__footer__pagination__btn}>
              <button>
                <TbPlayerTrackNextFilled />
              </button>
              <button>
                <ImNext2 />
              </button>
            </div>

            <select>
              <option selected disabled>
                20
              </option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>

          <div>
            <p>Ver 1 - 20 de 390</p>
          </div>
        </div>

        <p className={styles.soa__table__os}>
          <span>*</span> O.S foi prorrogada
        </p>
      </div>
    </>
  );
}
