import { StyleSheet } from 'react-native';
import { SF, SH, Fonts, Colors, SW, } from '../../utils';

export default MovieDetailScreenStyle = (Colors) => StyleSheet.create({
    MovieHeadBoxWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: Colors.gray_text_color,
        borderBottomWidth: SW(5),
        paddingVertical: SH(15),
        paddingLeft: SH(10),
        paddingRight: SH(10)
    },
    MovieIcon: {
        width: SW(30),
        height: SH(30)
    },
    MovieHeadBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%',
    },
    MovieTicketHeadBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
    },
    MovieHeadBoxLast: {
        width: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    MovieHeadBoxLastTwo: {
        width: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    MovieiconBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    PlaceNameText: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.black_text_color,
        fontSize: SF(14)
    },
    MoviewHeadText: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.black_text_color,
        fontSize: SF(20)
    },
    MoviewHeadTextSettop: {
        paddingTop: SH(15)
    },
    MoviewFilterBoxStyle: {
        paddingBottom: SH(10)
    },
    PadHor: {
        paddingHorizontal: SH(15)
    },
    FilterNameText: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.gray_text_color,
        fontSize: SF(16)
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
        backgroundColor: Colors.white_text_color,
        marginVertical: SH(15)
    },
    MovieBannerImg: {
        height: SH(130),
    },
    MovieBoxWrap: {
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: SH(15)
    },
    MoviewBannerWrap: {
        position: 'relative'
    },
    MoviewlikeBox: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: SH(10),
        left: SW(10),
        backgroundColor: Colors.black_text_color,
        padding: SH(5),
        borderRadius: SW(3)
    },
    LikePerText: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.white_text_color,
        fontSize: SF(16),
        paddingLeft: SH(5)
    },
    MovieNameText: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.black_text_color,
        fontSize: SF(18),
    },
    RateText: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.gray_text_color,
        fontSize: SF(14),
    },
    DotStyle: {
        width: SW(3),
        height: SH(3),
        backgroundColor: Colors.gray_text_color,
        borderRadius: SW(100),
        marginHorizontal: SH(5)
    },
    MovieDubInfor: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SH(8)
    },
    MovieViewBox: {
        borderWidth: 1,
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
        color: Colors.gray_text_color,
        fontSize: SF(14),
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
    ButtonBookBTn: {
        height: 'auto',
        width: 'auto',
        paddingVertical: SH(8),
        width: SW(100),
        borderWidth: SW(1),
        backgroundColor: 'transparent',
        borderColor: Colors.theme_background_grape
    },
    btnText: {
        fontSize: SF(14),
        color: Colors.theme_background_grape
    },
    MoviewPopularTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    UpMoviewPopularTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: SH(25)
    },
    MoviewAllViewText: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(14),
        color: Colors.theme_background_grape
    },
    MovieBannerImg: {
        height: SH(130),
    },
    UpMovieBoxWrap: {
        borderRadius: SW(5),
        overflow: 'hidden',
        marginBottom: SH(15),
        width: SW(180),
        marginHorizontal: SH(5)
    },
    UpcomMovieBannerImg: {
        height: '100%',
        width: '100%',
    },
    overlay: {
        backgroundColor: Colors.black_text_color,
        opacity: 0.3,
        width: '100%',
        height: SH(230),
        flex: 1,
    },
    UpMoviewBannerWrap: {
        position: 'relative',
        height: SH(230),
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
    uPMoviewlikeBox: {
        position: 'absolute',
        bottom: SH(20),
        left: SH(20)
    },
    ReleasedateText: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.white_text_color,
        fontSize: SF(14),
    },
    ReleasedateDataText: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.white_text_color,
        fontSize: SF(14),
    },
    UpHeadOnewText: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.black_text_color,
        fontSize: SF(14),
    },
    langtext: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.gray_text_color,
        fontSize: SF(12),
    },
    EntertainmanetText: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.gray_text_color,
        fontSize: SF(12),
    },
    UpcomingMoviewBoxStyle: {
        marginHorizontal: SH(10),
        marginTop: SH(12),
        marginBottom: SH(15)
    },
    toolbar: {
        marginTop: SH(30),
        backgroundColor: Colors.white_text_color,
        padding: SH(10),
        borderRadius: SW(5),
    },
    mediaPlayer: {
        position: 'absolute',
        top: SH(0),
        left: SW(0),
        bottom: SH(0),
        right: SW(0),
        backgroundColor: Colors.black_text_color,
        justifyContent: 'center',
        height: SH(200)
    },
    Monthrotatestyle: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.white_text_color,
        fontSize: SF(12),
        transform: [{ rotate: '270deg' }]
    },
    MoviewticketBookflex: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    MoviewheightSet: {
        height: SH(200)
    },
    MonthBoxrotatestyle: {
        backgroundColor: Colors.gray_text_color,
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SH(2),
        paddingVertical: SH(15),
        borderRadius: SW(3),
        marginRight: SH(8)
    },
    MonthDayTextActive: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.white_text_color,
        fontSize: SF(10)
    },
    MonthDayText: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.gray_text_color,
        fontSize: SF(10)
    },
    MonthActiveBox: {
        borderWidth: SW(0.8),
        borderColor: Colors.black_text_color,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SH(10),
        paddingVertical: SH(7),
        borderRadius: SW(5),
        marginRight: SH(8),
        width: SW(50),
        backgroundColor: Colors.gray_text_color,
        color: Colors.black_text_color,
    },
    MonthBox: {
        borderWidth: SW(0.8),
        borderColor: Colors.gray_text_color,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SH(10),
        paddingVertical: SH(7),
        borderRadius: SW(5),
        marginRight: SH(8),
        width: SW(50)
    },
    MonthDayActiveTextNumber: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.white_text_color,
        fontSize: SF(14)
    },
    MonthDayTextNumber: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.black_text_color,
        fontSize: SF(14)
    },
    MrtopSet: {
        marginTop: SH(20)
    },
    MovieticketAvltect: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.gray_text_color,
        fontSize: SF(9),
        textTransform: 'uppercase'
    },
    FlexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dotIconStyle: {
        marginRight: SH(5)
    },
    FlexRowJust: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SH(20),
        marginVertical: SH(15)
    },
    movieCinematext: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.black_text_color,
        fontSize: SF(16),
        paddingHorizontal: SH(15)
    },
    infoicon: {
        color: Colors.gray_text_color,
        paddingRight: SH(5)
    },
    AddessText: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.black_text_color,
        fontSize: SF(14),
    },
    FlexRowbeet: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SH(15),
        paddingVertical: SH(15)
    },

    MovieTimeText: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.green,
        fontSize: SF(16),
        textAlign: 'center'
    },
    MovietypeText: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.black_text_color,
        fontSize: SF(12),
        textAlign: 'center',
        paddingTop: SH(6)
    },
    TimeBoxBorder: {
        borderWidth: SW(0.8),
        borderColor: Colors.gray_text_color,
        paddingHorizontal: SH(15),
        paddingVertical: SH(10),
        borderRadius: SW(7),
        width: '100%',
    },
    TimeBoxBorderWrap: {
        width: '28%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: '2.6%',
        marginBottom: SH(10)
    },
    CinemaViewWrap: {
        marginVertical: SH(15),
    },
    MoviewlikeBoxDetails: {
        position: 'absolute',
        bottom: SH(10),
        left: SW(10),
        backgroundColor: Colors.black_text_color,
        padding: SH(5),
        borderRadius: SW(3)
    },
    Textwhite: {
        color: Colors.white_text_color
    },
    WhiteDot: {
        backgroundColor: Colors.white_text_color
    },
    MovieiconBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ShareiconSet: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: SW(65)
    },
    ShareiconSetText: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.black_text_color,
        fontSize: SF(11)
    },
    MovieTicketHeadBoxLastTwo: {
        width: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    CinemaNameText: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.gray_text_color,
        fontSize: SF(14),
    },
    TimeBoxBorderBook: {
        paddingHorizontal: SH(15),
        paddingVertical: SH(10),
        borderRadius: SW(7),
        width: '100%',
        overflow: 'hidden'
    },
    TimeBoxBorderBookWrap: {
        marginHorizontal: SH(5),
        backgroundColor: Colors.white_text_color,
        borderRadius: SW(7),
        borderWidth: SW(0.8),
        borderColor: Colors.gray_text_color,
    },
    TextMonthWrap: {
        width: SW(12)
    },
    TextMonth: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(16),
        color: Colors.gray_text_color
    },
    TextMonthDay: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(16),
        color: Colors.black_text_color
    },
    PaddLeftSet: {
        paddingLeft: SH(15),
        paddingVertical: SH(15)
    },
    BgSet: {
        backgroundColor: Colors.theme_background_grape
    },
    MovieShowSeatBox: {
        width: SW(25),
        height: SH(25),
        borderRadius: SW(5)
    },
    MovieShowSeatActiveBoxWrap: {
        marginHorizontal: SH(3),
        backgroundColor: Colors.theme_background_grape,
        borderColor: Colors.theme_background_grape,
        borderRadius: SW(3),
        borderWidth: SW(0.8),
    },
    MovieShowSeatBoxWrap: {
        marginHorizontal: SH(3),
        backgroundColor: Colors.white_text_color,
        borderRadius: SW(3),
        borderWidth: SW(0.8),
        borderColor: Colors.theme_background_grape
    },
    MovieShowSeatBoxWrapRight: {
        marginHorizontal: SH(3),
        backgroundColor: Colors.white_text_color,
        borderRadius: SW(3),
        borderWidth: SW(0.8),
    },
    marleftSet: {
        marginLeft: SH(20),
        backgroundColor: Colors.yellow_color
    },
    BtnBotmMr: {
        marginVertical: SH(5),
    },
    BookBtnwrap: {
        paddingHorizontal: SH(30),
        backgroundColor: Colors.white_text_color,
        shadowColor: Colors.gray_text_color,
        shadowOffset: {
            width: SW(0),
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        overflow: 'hidden',
    },
    UpMoviewLinearGradiant: {
        position: 'absolute',
        left: SW(0),
        right: SW(0),
        bottom: SH(0),
        height: '100%',
        zIndex: 1,
    },
    contentContainerStyle: {
        paddingHorizontal: SH(20),
    },
    BackArrowBoxWidthSet: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    CityMainBox: {
        width: '80%',
        paddingLeft: SH(20)
    },
    CityText: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.black_text_color,
        fontSize: SF(20),
    },
    minstyleviewphotograpgyTow: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.white_text_color,
    },
    contentContainerStyle: {
        width: '100%',
        height: 'auto',
    },
    minflexview: {
        width: '100%',
        height: '100%',
    },
    minviewsigninscreen: {
        width: '100%',
        height: '100%',
        marginHorizontal: '0%',
    },
});