import { StyleSheet } from 'react-native';
import { SF, SH, Fonts, Colors, SW } from '../../utils';

export default HomeTabStyles = (Colors) => StyleSheet.create({
    SetbgColorViewTime: {
        marginRight: SH(15),
        marginVertical: SH(10),
        borderRadius: SW(10),
        width: SW(180),
        shadowOffset: {
            width: SW(0),
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        overflow: 'hidden'
    },
    FlexRowseCenterImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: SW(200),
        height: SH(250),
    },
    ImgStyleProduct: {
        height: '100%',
        width: '100%'
    },
    TextView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: SH(0),
        width: '100%',
        height: SH(35),
        backgroundColor: Colors.black_text_color
    },
    NameTextTwo: {
        fontSize: SF(15),
        color: Colors.white_text_color,
        paddingLeft: SH(12)
    },
    MovieBoxWrap: {
        borderRadius: SW(8),
        overflow: 'hidden',
        marginBottom: SH(15)
    },
    MoviewBannerWrap: {
        position: 'relative',
        height: SH(200)
    },
    MovieBannerImg: {
        height: SH(200),
        width: '100%'
    },
    MoviewlikeBox: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: SH(10),
        left: SW(10),
        backgroundColor: Colors.bg_white,
        padding: SH(5),
        borderRadius: SW(3)
    },
    LikePerText: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.TextWhiteColor,
        fontSize: SF(16),
        paddingLeft: SH(5)
    },
    MovieCradHeadBox: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: SH(15),
        paddingVertical: SH(15),
        borderWidth: SW(1),
        borderColor: Colors.gray_text_color,
        borderBottomLeftRadius: SW(8),
        borderBottomRightRadius: SW(8)
    },
    MovieNameText: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.TextBlackColor,
        fontSize: SF(18),
    },
    MovieDubInfor: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SH(8)
    },
    RateText: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.LightBlackText,
        fontSize: SF(14),
    },
    DotStyle: {
        width: SW(3),
        height: SH(3),
        backgroundColor: Colors.LightBlackText,
        borderRadius: SW(100),
        marginHorizontal: SH(5)
    },
    MovieViewBox: {
        borderWidth: SW(1),
        borderColor: Colors.gray_text_color,
        width: SW(40),
        justifyContent: 'center',
        alignItems: 'center',
        padding: SH(2),
        borderRadius: SW(3),
        marginTop: SH(15)
    },
    MovieView: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.LightBlackText,
        fontSize: SF(14),
    },
    ButtonBookBTn: {
        height: 'auto',
        width: 'auto',
        paddingVertical: SH(8),
        width: SW(100),
        borderWidth: SW(1),
        borderColor: Colors.white_text_color
    },
    btnText: {
        fontSize: SF(14),
        color: Colors.white_text_color
    },
    MovieTicketFilterBox: {
        borderWidth: SW(1),
        borderColor: Colors.gray_text_color,
        borderRadius: SW(20),
        paddingHorizontal: SH(15),
        paddingVertical: SH(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SH(5),
        marginVertical: SH(15),
        backgroundColor: Colors.white_text_color
    },
    MovieTicketFilterBoxTwo: {
        borderWidth: SW(1),
        borderColor: Colors.gray_text_color,
        borderRadius: SW(20),
        paddingHorizontal: SH(15),
        paddingVertical: SH(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SH(5),
        marginVertical: SH(15),
        backgroundColor: Colors.theme_background_grape
    },
    FilterNameText: {
        fontSize: SF(16),
        color: Colors.black_text_color
    },
    FilterNameTextTwo: {
        fontSize: SF(16),
        color: Colors.white_text_color
    },
    UpMovieBoxWrap: {
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: SH(15),
        width: SW(180),
        marginHorizontal: SH(5)
    },
    UpMoviewBannerWrap: {
        position: 'relative',
        height: SH(230),
    },
    UpMoviewLinearGradiant: {
        position: 'absolute',
        left: SW(0),
        right: SW(0),
        bottom: SH(0),
        height: '100%',
        zIndex: 1,
    },
    UpcomMovieBannerImgBox: {
        paddingHorizontal: SH(10),
        paddingVertical: SH(15),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    UpcomMovieBannerImg: {
        height: '100%',
        width: '100%',
    },
    UpHeadOnewText: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.TextBlackColor,
        fontSize: SF(14),
    },
    langtext: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.LightBlackText,
        fontSize: SF(12),
    },
    MoviewHeadText: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.theme_background_grape,
        fontSize: SF(20)
    },
    MoviewFilterBoxStyle: {
        paddingHorizontal: SH(5)
    },
    MoviewFilterBoxStyleTwo: {
        paddingBottom: SH(10),
    },
    PadHor: {
        paddingHorizontal: SH(8)
    },
    MoviewPopularTextBox: {
        paddingLeft: SH(10)
    },
    UpMoviewPopularTextBox: {
        paddingTop: SH(25),
    },
    OverLay: {
        backgroundColor: Colors.black_text_color,
        opacity: 0.3,
        width: '100%',
        height: SH(230),
        flex: 1,
    },
    EntertainmanetText: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.LightBlackText,
        fontSize: SF(12),
    },
    UpcomingMoviewBoxStyle: {
        marginVertical: SH(12),
    },
    ContentContainerStyle: {
        width: '100%',
        height: 'auto',
    },
    MinFlexView: {
        width: '100%',
        height: '100%',
    },
    MinViewSigninScreen: {
        width: '100%',
        height: '100%',
        marginHorizontal: '0%',
    },
    MinStyleViewPhotograpgy: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.bg_white,
    },
    SetFlex: {
        overflow: 'hidden',
    },
    HomeListFive: {
        paddingHorizontal: '1%',
    },
    BihSlider: {
        paddingHorizontal: '2%'
    }
});