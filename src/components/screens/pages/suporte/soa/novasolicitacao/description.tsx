import {
  FaBold,
  FaCaretDown,
  FaItalic,
  FaList,
  FaListOl,
} from "react-icons/fa";
import {
  MdFormatAlignCenter,
  MdOutlineFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatAlignJustify,
} from "react-icons/md";
import { PiTextIndentFill } from "react-icons/pi";
import { PiTextOutdentFill } from "react-icons/pi";
import styles from "@/styles/pages/suporte/soa/Nova.module.scss";

export default function Description() {
  return (
    <div
      className={styles.nova__solicitation__container_formDescription__contents}
    >
      <div className={styles.formDescription__contents__container}>
        <div className={styles.formDescription__contents__containerHeader}>
          <ul>
            <li>
              <span>Arquivo</span>
              <span>
                <FaCaretDown />
              </span>
            </li>
            <li>
              <span>Editar</span>
              <span>
                <FaCaretDown />
              </span>
            </li>
            <li>
              <span>Visualizar</span>
              <span>
                <FaCaretDown />
              </span>
            </li>
            <li>
              <span>Formatar</span>
              <span>
                <FaCaretDown />
              </span>
            </li>
          </ul>

          <ul>
            <li>
              <span>Formatos</span>
              <span>
                <FaCaretDown />
              </span>
            </li>

            {/* Font Type */}
            <div
              className={
                styles.formDescription__contents__containerHeader_fontType
              }
            >
              <li>
                <span>
                  <FaBold />
                </span>
              </li>
              <li>
                <span>
                  <FaItalic />
                </span>
              </li>
            </div>

            {/* Font Align */}
            <div
              className={
                styles.formDescription__contents__containerHeader_fontAlign
              }
            >
              <li>
                <span>
                  <MdOutlineFormatAlignLeft />
                </span>
              </li>
              <li>
                <span>
                  <MdFormatAlignCenter />
                </span>
              </li>
              <li>
                <span>
                  <MdFormatAlignRight />
                </span>
              </li>
              <li>
                <span>
                  <MdFormatAlignJustify />
                </span>
              </li>
            </div>

            {/* Font Ident */}
            <div
              className={
                styles.formDescription__contents__containerHeader_fontIdent
              }
            >
              <li>
                <span>
                  <FaList />
                </span>
              </li>
              <li>
                <span>
                  <FaListOl />
                </span>
              </li>
              <li>
                <span>
                  <PiTextOutdentFill />
                </span>
              </li>
              <li>
                <span>
                  <PiTextIndentFill />
                </span>
              </li>
            </div>
          </ul>
        </div>

        <textarea></textarea>

        <div className={styles.formDescription__contents__containerCaracters}>
          <p>P</p>
        </div>
      </div>
    </div>
  );
}
