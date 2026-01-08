import React, { useState, useEffect } from "react";

const ColorPicker = ({ value, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [hue, setHue] = useState(120);
  const [saturation, setSaturation] = useState(100);
  const [lightness, setLightness] = useState(50);

  useEffect(() => {
    if (value && value.startsWith("#")) {
      const rgb = hexToRgb(value);
      if (rgb) {
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        setHue(hsl.h);
        setSaturation(hsl.s);
        setLightness(hsl.l);
      }
    }
  }, [value]);

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const hslToHex = (h, s, l) => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
  };

  const handleHueChange = (e) => {
    const newHue = parseInt(e.target.value);
    setHue(newHue);
    onChange(hslToHex(newHue, saturation, lightness));
  };

  const handleSaturationLightnessChange = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newSat = Math.round((x / rect.width) * 100);
    const newLight = Math.round((1 - y / rect.height) * 100);
    setSaturation(newSat);
    setLightness(newLight);
    onChange(hslToHex(hue, newSat, newLight));
  };

  return (
    <div style={{ marginTop: "8px" }}>
      <div
        onClick={() => setShowPicker(!showPicker)}
        style={{
          width: "100%",
          height: "40px",
          backgroundColor: value || "#00FF00",
          border: "1px solid #c4cdd5",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      />
      {showPicker && (
        <div
          style={{
            marginTop: "8px",
            padding: "12px",
            border: "1px solid #c4cdd5",
            borderRadius: "4px",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "150px",
              background: `linear-gradient(to bottom, white, black), linear-gradient(to right, white, hsl(${hue}, 100%, 50%))`,
              backgroundBlendMode: "multiply",
              position: "relative",
              cursor: "crosshair",
              borderRadius: "4px",
            }}
            onMouseDown={handleSaturationLightnessChange}
          >
            <div
              style={{
                position: "absolute",
                left: `${saturation}%`,
                top: `${100 - lightness}%`,
                width: "12px",
                height: "12px",
                border: "2px solid white",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                boxShadow: "0 0 0 1px black",
              }}
            />
          </div>
          <div style={{ marginTop: "12px" }}>
            <input
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={handleHueChange}
              style={{
                width: "100%",
                background:
                  "linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
