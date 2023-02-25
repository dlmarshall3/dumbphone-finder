import { IPhone } from "./IPhone.interface";
import * as Constants from "../constants/phone.enum";

export const PlumRam10: IPhone = {
    supportAndUpdates: Constants.Support.NotRel,
    usNetwork: [Constants.USNetwork.TM],
    voLTE: Constants.VoLTE.Yes,
    mms: Constants.MMS.Yes,
    hotspotTethering: Constants.Hotspot.No,
    usbType: Constants.USBType.Micro,
    unlocked: Constants.Unlocked.Yes,
    joseRating: 2,
    category: Constants.Category.Dumb,
    gpsNavigation: [Constants.Navigation.No],
    physicalFormat: Constants.PhysicalFormat.Flip,
    removableBattery: Constants.RemovableBattery.Yes,
    browser: Constants.Browser.Yes,
    whatsApp: Constants.WhatsApp.No,
    spotify: Constants.Spotify.No
}