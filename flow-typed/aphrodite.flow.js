// @flow
/**
 * NOTE(jeresig): This file is based on the following:
 * https://gist.github.com/aaronjensen/44251ed19c4b6635975925f3c7ca0463/87a317ddecb6885eefe6381bffa977922bd225f1
 *
 * It was then modified in a couple ways:
 *  1) The StyleDeclaration type was enforced on the input of create().
 *  2) The _CSSProperties type was made strict to not allow any extra
 *     properties.
 *  3) Missing CSS properties were added to _CSSProperties to support all
 *     the cases currently used in our stylesheets.
 */
type _CSSProperties = {|
    alignContent?: any,
    alignItems?: any,
    alignSelf?: any,
    alignmentAdjust?: any,
    alignmentBaseline?: any,
    animationDelay?: any,
    animationDirection?: any,
    animationDuration?: any,
    animationFillMode?: any,
    animationIterationCount?: any,
    animationName?: any,
    animationPlayState?: any,
    animationTimingFunction?: any,
    appearance?: any,
    backfaceVisibility?: any,
    background?: any,
    backgroundAttachment?: "scroll" | "fixed" | "local",
    backgroundBlendMode?: any,
    backgroundClip?: any,
    backgroundColor?: any,
    backgroundComposite?: any,
    backgroundImage?: any,
    backgroundOrigin?: any,
    backgroundPosition?: any,
    backgroundRepeat?: any,
    baselineShift?: any,
    backgroundSize?: any,
    behavior?: any,
    border?: any,
    borderBottom?: any,
    borderBottomColor?: any,
    borderBottomLeftRadius?: any,
    borderBottomRightRadius?: any,
    borderBottomStyle?: any,
    borderBottomWidth?: any,
    borderCollapse?: any,
    borderColor?: any,
    borderCornerShape?: any,
    borderImageSource?: any,
    borderImageWidth?: any,
    borderLeft?: any,
    borderLeftColor?: any,
    borderLeftStyle?: any,
    borderLeftWidth?: any,
    borderRadius?: any,
    borderRight?: any,
    borderRightColor?: any,
    borderRightStyle?: any,
    borderRightWidth?: any,
    borderSpacing?: any,
    borderStyle?: any,
    borderTop?: any,
    borderTopColor?: any,
    borderTopLeftRadius?: any,
    borderTopRightRadius?: any,
    borderTopStyle?: any,
    borderTopWidth?: any,
    borderWidth?: any,
    bottom?: any,
    boxAlign?: any,
    boxDecorationBreak?: any,
    boxDirection?: any,
    boxLineProgression?: any,
    boxLines?: any,
    boxOrdinalGroup?: any,
    boxFlex?: number,
    boxFlexGroup?: number,
    boxShadow?: any,
    boxSizing?: any,
    breakAfter?: any,
    breakBefore?: any,
    breakInside?: any,
    clear?: any,
    clip?: any,
    clipRule?: any,
    color?: any,
    columnCount?: number,
    columnFill?: any,
    columnGap?: any,
    columnRule?: any,
    columnRuleColor?: any,
    columnRuleWidth?: any,
    columnSpan?: any,
    columnWidth?: any,
    columns?: any,
    content?: any,
    counterIncrement?: any,
    counterReset?: any,
    cue?: any,
    cueAfter?: any,
    cursor?: any,
    direction?: any,
    display?: any,
    fill?: any,
    fillOpacity?: number,
    fillRule?: any,
    filter?: any,
    flex?: number | string,
    flexAlign?: any,
    flexBasis?: any,
    flexDirection?: any,
    flexFlow?: any,
    flexGrow?: number,
    flexItemAlign?: any,
    flexLinePack?: any,
    flexOrder?: any,
    flexShrink?: number,
    flexWrap?: any,
    float?: any,
    flowFrom?: any,
    font?: any,
    fontFamily?: string,
    fontKerning?: any,
    fontSize?: number | string,
    fontSizeAdjust?: any,
    fontStretch?: any,
    fontStyle?: any,
    fontSynthesis?: any,
    fontVariant?: any,
    fontVariantAlternates?: any,
    fontWeight?: "normal" | "bold" | "lighter" | "bolder" | "inherit" | number,
    gridArea?: any,
    gridColumn?: any,
    gridColumnEnd?: any,
    gridColumnStart?: any,
    gridRow?: any,
    gridRowEnd?: any,
    gridRowPosition?: any,
    gridRowSpan?: any,
    gridTemplateAreas?: any,
    gridTemplateColumns?: any,
    gridTemplateRows?: any,
    height?: any,
    hyphenateLimitChars?: any,
    hyphenateLimitLines?: any,
    hyphenateLimitZone?: any,
    hyphens?: any,
    imeMode?: any,
    justifyCenter?: any,
    justifyContent?: any,
    layoutGrid?: any,
    layoutGridChar?: any,
    layoutGridLine?: any,
    layoutGridMode?: any,
    layoutGridType?: any,
    left?: any,
    letterSpacing?: any,
    lineBreak?: any,
    lineClamp?: number,
    lineHeight?: number | string,
    listStyle?: any,
    listStyleImage?: any,
    listStylePosition?: any,
    listStyleType?: any,
    margin?: any,
    marginBottom?: any,
    marginLeft?: any,
    marginRight?: any,
    marginTop?: any,
    marqueeDirection?: any,
    marqueeStyle?: any,
    mask?: any,
    maskBorder?: any,
    maskBorderRepeat?: any,
    maskBorderSlice?: any,
    maskBorderSource?: any,
    maskBorderWidth?: any,
    maskClip?: any,
    maskOrigin?: any,
    maxFontSize?: any,
    maxHeight?: any,
    maxWidth?: any,
    minHeight?: any,
    minWidth?: any,
    opacity?: number,
    order?: number,
    orphans?: number,
    outline?: any,
    outlineColor?: any,
    outlineOffset?: any,
    overflow?: any,
    overflowStyle?: any,
    overflowWrap?: any,
    overflowX?: any,
    overflowY?: any,
    padding?: any,
    paddingBottom?: any,
    paddingLeft?: any,
    paddingRight?: any,
    paddingTop?: any,
    pageBreakAfter?: any,
    pageBreakBefore?: any,
    pageBreakInside?: any,
    pause?: any,
    pauseAfter?: any,
    pauseBefore?: any,
    perspective?: any,
    perspectiveOrigin?: any,
    pointerEvents?: any,
    position?: any,
    punctuationTrim?: any,
    quotes?: any,
    regionFragment?: any,
    resize?: any,
    restAfter?: any,
    restBefore?: any,
    right?: any,
    rubyAlign?: any,
    rubyPosition?: any,
    shapeImageThreshold?: any,
    shapeInside?: any,
    shapeMargin?: any,
    shapeOutside?: any,
    speak?: any,
    speakAs?: any,
    stroke?: any,
    strokeOpacity?: number,
    strokeWidth?: number,
    tabSize?: any,
    tableLayout?: any,
    textAlign?: any,
    textAlignLast?: any,
    textDecoration?: any,
    textDecorationColor?: any,
    textDecorationLine?: any,
    textDecorationLineThrough?: any,
    textDecorationNone?: any,
    textDecorationOverline?: any,
    textDecorationSkip?: any,
    textDecorationStyle?: any,
    textDecorationUnderline?: any,
    textEmphasis?: any,
    textEmphasisColor?: any,
    textEmphasisStyle?: any,
    textHeight?: any,
    textIndent?: any,
    textJustifyTrim?: any,
    textKashidaSpace?: any,
    textLineThrough?: any,
    textLineThroughColor?: any,
    textLineThroughMode?: any,
    textLineThroughStyle?: any,
    textLineThroughWidth?: any,
    textOverflow?: any,
    textOverline?: any,
    textOverlineColor?: any,
    textOverlineMode?: any,
    textOverlineStyle?: any,
    textOverlineWidth?: any,
    textRendering?: any,
    textScript?: any,
    textShadow?: any,
    textTransform?: any,
    textUnderlinePosition?: any,
    textUnderlineStyle?: any,
    top?: any,
    touchAction?: any,
    transform?: any,
    transformOrigin?: any,
    transformOriginZ?: any,
    transformStyle?: any,
    transition?: any,
    transitionDelay?: any,
    transitionDuration?: any,
    transitionProperty?: any,
    transitionTimingFunction?: any,
    unicodeBidi?: any,
    unicodeRange?: any,
    userFocus?: any,
    userInput?: any,
    userSelect?: any,
    verticalAlign?: any,
    visibility?: any,
    voiceBalance?: any,
    voiceDuration?: any,
    voiceFamily?: any,
    voicePitch?: any,
    voiceRange?: any,
    voiceRate?: any,
    voiceStress?: any,
    voiceVolume?: any,
    whiteSpace?: any,
    whiteSpaceTreatment?: any,
    widows?: number,
    width?: any,
    willChange?: any,
    wordBreak?: any,
    wordSpacing?: any,
    wordWrap?: any,
    wrapFlow?: any,
    wrapMargin?: any,
    wrapOption?: any,
    writingMode?: any,
    zIndex?: "auto" | number,
    zoom?: "auto" | number,

    // NOTE(jeresig): What follows are all of the custom properties that we've
    // added to this file.

    // Browser-specific properties that we allow
    // NOTE(jeresig): These should be removed once there is better browser
    // support and/or better support in Aphrodite.
    MozAppearance?: any,
    WebkitAppearance?: any,
    WebkitTapHighlightColor?: any,
    MozOsxFontSmoothing?: any,
    WebkitFontSmoothing?: any,
    WebkitBoxOrient?: string,
    WebkitLineClamp?: number,
    WebkitOverflowScrolling?: any,
    WebkitFlexBasis?: any,
    MsFlexBasis?: any,
    MsFlexPreferredSize?: any,

    // States
    ":active"?: _CSSProperties,
    ":hover"?: _CSSProperties,
    ":focus"?: _CSSProperties,
    ":link"?: _CSSProperties,
    ":visited"?: _CSSProperties,
    ":disabled"?: _CSSProperties,
    "::-moz-focus-inner"?: _CSSProperties,

    // Contents
    ":first-letter"?: _CSSProperties,
    ":before"?: _CSSProperties,
    "::before"?: _CSSProperties,
    ":after"?: _CSSProperties,
    "::after"?: _CSSProperties,
    "::placeholder"?: _CSSProperties,

    // Media Queries
    // These two are used by wonder-blocks-typography/util/styles.js
    // and should probably be replaced with something else.
    "@media (max-width: 1023px)"?: _CSSProperties,
    "@media (min-width: 1024px)"?: _CSSProperties,

    // This is used by wonder-blocks-grid/util/styles.js
    "@media (min-width: 1168px)"?: _CSSProperties,

    // Aphrodite Internal
    _definition?: _CSSProperties,
|};

declare module "aphrodite" {
    /**
     * A CSS property definition.
     */
    declare type CSSProperties = _CSSProperties;

    /**
     * Aphrodite style declaration
     */
    declare type StyleDeclaration = {
        [key: string]: _CSSProperties,
    };

    declare interface StyleSheetStatic {
        /**
         * Create style sheet
         */
        create<T: StyleDeclaration>(styles: T): T;
        /**
         * Rehydrate class names from server renderer
         */
        rehydrate(renderedClassNames: Array<string>): void;
    }

    declare var StyleSheet: StyleSheetStatic;

    /**
     * Get class names from passed styles
     */
    declare function css(...styles: Array<any>): string;
}
