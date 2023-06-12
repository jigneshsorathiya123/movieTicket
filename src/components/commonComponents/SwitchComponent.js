import React, { useState } from "react";
import { Switch, View } from "react-native";
import { Colors, SH } from "../../utils";

const SwitchComponent = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <Switch
                trackColor={{ false: Colors.gr, true: Colors.theme_background_brink_pink }}
                thumbColor={isEnabled ? Colors.light_gray_text_color : Colors.argent_color}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};
export default SwitchComponent;