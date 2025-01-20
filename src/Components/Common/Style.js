// import { getColorsCSS } from '../../../../Components/utils/getCSS';

const Style = ({ attributes }) => {
  const { colors, styles } = attributes;

  const { cardBorderGradient } = styles;

  console.log(attributes, "gradientType from styles");

  // const mainSl = `#${id}`;
  // const blockSl = `${mainSl} .bBlocksTestPurpose`;
  // ${blockSl} p{
  // 	${getColorsCSS(colors)}
  // }

  // background: ${gradientType}(${gradientAngle}, ${gradientColor1}, ${gradientColor2}) border-box;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		
		.card-border{
		  background: ${cardBorderGradient} border-box;
		}

	`,
      }}
    />
  );
};
export default Style;
