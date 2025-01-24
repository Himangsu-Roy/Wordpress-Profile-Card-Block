// import { getColorsCSS } from '../../../../Components/utils/getCSS';

// const Style = ({ attributes }) => {
//   const {
//     colors,
//     nameFontWeight,
//     styles,
//     cardLayout,
//     nameFontFamily,
//     nameFontSize,
//     nameLetterSpacing,
//     nameLineHeight,
//     nameTextTrasform,
//     nameFontStyle,
//     titleFontFamily,
//     titleFontSize,
//     titleFontWeight,
//     titleLetterSpacing,
//     titleLineHeight,
//     titleTextTrasform,
//     titleFontStyle,
//     textColor,
//     backgroundColor,
//     alpha,
//     cards
//   } = attributes;

//   const rgbaColor = `rgba(${parseInt(
//     backgroundColor.slice(1, 3),
//     16
//   )}, ${parseInt(backgroundColor.slice(3, 5), 16)}, ${parseInt(
//     backgroundColor.slice(5, 7),
//     16
//   )}, ${alpha})`;

//   console.log(nameLetterSpacing, "letterSpacing from attributes");

//   const { cardBorderGradient, avatarBorderGradient, textContentGradient } =
//     styles;

//   console.log(textContentGradient, "gradientType from styles");

//   const { borderRadius } = cardLayout;

//   // const mainSl = `#${id}`;
//   // const blockSl = `${mainSl} .bBlocksTestPurpose`;
//   // ${blockSl} p{
//   // 	${getColorsCSS(colors)}
//   // }

//   // background: ${gradientType}(${gradientAngle}, ${gradientColor1}, ${gradientColor2}) border-box;

//   // border-radius: ${attributes.borderRadius.top} ${attributes.borderRadius.right} ${attributes.borderRadius.bottom} ${attributes.borderRadius.left} ;

//   return (
//     <style
//       dangerouslySetInnerHTML={{
//         __html: `

// 		.card-border {
// 		   background: ${cardBorderGradient} border-box;
// 		   border-radius: ${borderRadius.top} ${borderRadius.right} ${
//          borderRadius.bottom
//        } ${borderRadius.left} ;
// 		}

// 		.avatar-border {
// 			background: ${avatarBorderGradient} border-box;
// 		}

// 		.name {
// 			background: ${textContentGradient} border-box;
// 			font-family: ${nameFontFamily} !important;
// 			font-size: ${nameFontSize} !important;
// 			font-weight: ${nameFontWeight} !important;
// 			letter-spacing: ${nameLetterSpacing}px !important;
//       line-height: ${nameLineHeight} !important;
//       text-transform: ${nameTextTrasform} !important;
//       font-style: ${nameFontStyle} !important;

// 		}

//     .title{
//       font-family: ${titleFontFamily} !important;
// 			font-size: ${titleFontSize} !important;
// 			font-weight: ${titleFontWeight} !important;
// 			letter-spacing: ${titleLetterSpacing}px !important;
//       line-height: ${titleLineHeight} !important;
//       text-transform: ${titleTextTrasform} !important;
//       font-style: ${titleFontStyle} !important;
//       color: ${textColor} !important;
//     }

//     .stat-label{
//       color: ${textColor} !important;
//     }

//     .bio{
//       color: ${textColor} !important;
//     }

//     .skill {
//         color: ${textColor} !important;
//     }

//     .actions > .action-btn:nth-of-type(2) {
//         color: ${textColor} !important;
//     }

// 		.stat-value{
// 			background: ${textContentGradient} border-box;
// 		}

// 		.profile-card{
// 			background: ${rgbaColor};
// 			border-radius: ${borderRadius.top} ${borderRadius.right} ${
//         borderRadius.bottom
//       } ${borderRadius.left};
// 		}

// 	`,
//       }}
//     />
//   );
// };
// export default Style;

// const Style = ({ attributes }) => {
//   const { cards = [] } = attributes; // Only rely on the cards array

//   // Generate dynamic card-specific CSS
//   const cardStyles = cards
//     .map((card, index) => {
//       const {
//         styles = {},
//         nameFontFamily = "Arial",
//         nameFontSize = "16px",
//         nameFontWeight = "normal",
//         nameLetterSpacing = 0,
//         nameLineHeight = 1.5,
//         nameTextTransform = "none",
//         nameFontStyle = "normal",
//         titleFontFamily = "Arial",
//         titleFontSize = "14px",
//         titleFontWeight = "normal",
//         titleLetterSpacing = 0,
//         titleLineHeight = 1.5,
//         titleTextTransform = "none",
//         titleFontStyle = "normal",
//         textColor = "#000",
//         backgroundColor = "#ffffff",
//         alpha = 1,
//       } = card;

//       const {
//         cardBorderGradient = "transparent",
//         avatarBorderGradient = "transparent",
//         textContentGradient = "transparent",
//         cardBorderColor,
//       } = styles;

//       // Convert hex to RGBA
//       const rgbaColor =
//         backgroundColor &&
//         backgroundColor.startsWith("#") &&
//         backgroundColor.length === 7
//           ? `rgba(${parseInt(backgroundColor.slice(1, 3), 16)}, ${parseInt(
//               backgroundColor.slice(3, 5),
//               16
//             )}, ${parseInt(backgroundColor.slice(5, 7), 16)}, ${alpha})`
//           : backgroundColor;

//       const cardBackground = cardBorderColor || rgbaColor;

//       return `
//         .profile-card-${index} {
//           background: ${cardBackground};
//           border-radius: ${styles.borderRadius || "0px"};
//         }

//         .profile-card-${index} .name {
//           font-family: ${nameFontFamily};
//           font-size: ${nameFontSize};
//           font-weight: ${nameFontWeight};
//           letter-spacing: ${nameLetterSpacing}px;
//           line-height: ${nameLineHeight};
//           text-transform: ${nameTextTransform};
//           font-style: ${nameFontStyle};
//           color: ${textColor};
//         }

//         .profile-card-${index} .title {
//           font-family: ${titleFontFamily};
//           font-size: ${titleFontSize};
//           font-weight: ${titleFontWeight};
//           letter-spacing: ${titleLetterSpacing}px;
//           line-height: ${titleLineHeight};
//           text-transform: ${titleTextTransform};
//           font-style: ${titleFontStyle};
//           color: ${textColor};
//         }

//         .profile-card-${index} .stat-label,
//         .profile-card-${index} .bio,
//         .profile-card-${index} .skill {
//           color: ${textColor};
//         }

//         .profile-card-${index} .card-border {
//           background: ${cardBorderGradient} border-box;
//         }

//         .profile-card-${index} .avatar-border {
//           background: ${avatarBorderGradient} border-box;
//         }

//         .profile-card-${index} .stat-value {
//           background: ${textContentGradient} border-box;
//         }
//       `;
//     })
//     .join("\n");

//   return (
//     <style
//       dangerouslySetInnerHTML={{
//         __html: `
//           ${cardStyles} /* Dynamically generated card styles */
//         `,
//       }}
//     />
//   );
// };

// export default Style;

import { useState } from "@wordpress/element";

const Style = ({ attributes, setAttributes }) => {
  const { cards = [], alignment } = attributes; // Only rely on the cards array
  // const [align, setAlign] = useState(alignment);
  if (alignment == "center") {
    setAttributes({ alignment: "center" });
  } else if (alignment == "right") {
    setAttributes({ alignment: "right" });
  } else {
    setAttributes({ alignment: "left" });
  }
  // Generate dynamic card-specific CSS
  const cardStyles = cards
    .map((card, index) => {
      const {
        styles = {},
        nameFontFamily = "Arial",
        nameFontSize = "16px",
        nameFontWeight = "normal",
        nameLetterSpacing = 0,
        nameLineHeight = 1.5,
        nameTextTransform = "none",
        nameFontStyle = "normal",
        titleFontFamily = "Arial",
        titleFontSize = "14px",
        titleFontWeight = "normal",
        titleLetterSpacing = 0,
        titleLineHeight = 1.5,
        titleTextTransform = "none",
        titleFontStyle = "normal",
        textColor = "#000",
        backgroundColor = "#ffffff",
        alpha = 1,
        cardLayout = {},
      } = card;

      const {
        cardBorderGradient = "transparent",
        avatarBorderGradient = "transparent",
        textContentGradient = "transparent",
        cardBorderColor,
      } = styles;

      console.log(avatarBorderGradient, " avatar border gradient");

      const { borderRadius = "0px" } = cardLayout;

      // Safely convert hex to RGBA
      const rgbaColor =
        typeof backgroundColor === "string" &&
        backgroundColor.startsWith("#") &&
        backgroundColor.length === 7
          ? `rgba(${parseInt(backgroundColor.slice(1, 3), 16)}, ${parseInt(
              backgroundColor.slice(3, 5),
              16
            )}, ${parseInt(backgroundColor.slice(5, 7), 16)}, ${alpha})`
          : backgroundColor || "#ffffff"; // Default fallback to white

      const cardBackground = cardBorderColor || rgbaColor;

      return `
      .wp-block-b-blocks-profile-card{
        display: flex;
        justify-content: ${alignment};
      }
        .profile-card-${index} {
          background: ${cardBackground};
          border-radius: ${borderRadius};
        }

        .profile-card-${index} .name {
          font-family: ${nameFontFamily};
          font-size: ${nameFontSize};
          font-weight: ${nameFontWeight};
          letter-spacing: ${nameLetterSpacing}px;
          line-height: ${nameLineHeight};
          text-transform: ${nameTextTransform};
          font-style: ${nameFontStyle};
          color: ${textColor};
        }

        .profile-card-${index} .title {
          font-family: ${titleFontFamily};
          font-size: ${titleFontSize};
          font-weight: ${titleFontWeight};
          letter-spacing: ${titleLetterSpacing}px;
          line-height: ${titleLineHeight};
          text-transform: ${titleTextTransform};
          font-style: ${titleFontStyle};
          color: ${textColor};
        }

        .profile-card-${index} .stat-label,
        .profile-card-${index} .bio,
        .profile-card-${index} .skill {
          color: ${textColor};
        }

        .profile-card-${index} .card-border {
          background: ${cardBorderGradient} border-box;
        }

        .profile-card-${index} .avatar-border {
          background: ${avatarBorderGradient} border-box;
        }

        .profile-card-${index} .stat-value {
          background: ${textContentGradient} border-box;
        }
      `;
    })
    .join("\n");

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          ${cardStyles} /* Dynamically generated card styles */
        `,
      }}
    />
  );
};

export default Style;
