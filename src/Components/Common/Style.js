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

const Style = ({ attributes }) => {
  const {
    colors,
    nameFontWeight,
    styles,
    cardLayout,
    nameFontFamily,
    nameFontSize,
    nameLetterSpacing,
    nameLineHeight,
    nameTextTrasform,
    nameFontStyle,
    titleFontFamily,
    titleFontSize,
    titleFontWeight,
    titleLetterSpacing,
    titleLineHeight,
    titleTextTrasform,
    titleFontStyle,
    textColor,
    backgroundColor,
    alpha,
    cards = [], // Default to an empty array to avoid errors
  } = attributes;

  // Convert hex to RGBA
  const rgbaColor = `rgba(${parseInt(
    backgroundColor.slice(1, 3),
    16
  )}, ${parseInt(backgroundColor.slice(3, 5), 16)}, ${parseInt(
    backgroundColor.slice(5, 7),
    16
  )}, ${alpha})`;

  const { cardBorderGradient, avatarBorderGradient, textContentGradient } =
    styles;

  const { borderRadius } = cardLayout;

  // Generate dynamic card-specific CSS
  const cardStyles = cards
    .map((card, index) => {
      const { cardBorderGradient, avatarBorderGradient, textContentGradient } =
        card.styles;
      const cardBackground = card.styles?.cardBorderColor || rgbaColor;
      const cardTextColor = card.textColor || textColor;

      return `
        .profile-card-${index} {
          background: ${cardBackground};  
          border-radius: ${borderRadius.top} ${borderRadius.right} ${
            borderRadius.bottom
          } ${borderRadius.left};
        }

        .profile-card-${index} .name {
          font-family: ${card.nameFontFamily || nameFontFamily} !important;
          font-size: ${card.nameFontSize || nameFontSize} !important;
          font-weight: ${card.nameFontWeight || nameFontWeight} !important;
          letter-spacing: ${
            card.nameLetterSpacing || nameLetterSpacing
          }px !important;
          line-height: ${card.nameLineHeight || nameLineHeight} !important;
          text-transform: ${
            card.nameTextTrasform || nameTextTrasform
          } !important;
          font-style: ${card.nameFontStyle || nameFontStyle} !important;
          color: ${cardTextColor} !important;
        }

        .profile-card-${index} .title {
          font-family: ${card.titleFontFamily || titleFontFamily} !important;
          font-size: ${card.titleFontSize || titleFontSize} !important;
          font-weight: ${card.titleFontWeight || titleFontWeight} !important;
          letter-spacing: ${
            card.titleLetterSpacing || titleLetterSpacing
          }px !important;
          line-height: ${card.titleLineHeight || titleLineHeight} !important;
          text-transform: ${
            card.titleTextTrasform || titleTextTrasform
          } !important;
          font-style: ${card.titleFontStyle || titleFontStyle} !important;
        }
        
        .profile-card-${index} .stat-label,
        .profile-card-${index} .bio,
        .profile-card-${index} .skill {
          color: ${cardTextColor} !important;
        }
      `;
    })
    .join("\n");

  console.log(cardStyles, "cardStyles from style ---");

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .card-border {
            background: ${cardBorderGradient} border-box;
            
            border-radius: ${borderRadius.top} ${borderRadius.right} ${borderRadius.bottom} ${borderRadius.left};
          }

          .avatar-border {
            background: ${avatarBorderGradient} border-box;
          }

          .stat-value {
            background: ${textContentGradient} border-box;
          }

          ${cardStyles} /* Inject dynamically generated card styles */
        `,
      }}
    />
  );
};

export default Style;
