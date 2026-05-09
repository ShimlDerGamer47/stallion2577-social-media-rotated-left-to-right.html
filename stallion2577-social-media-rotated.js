document.addEventListener("DOMContentLoaded", () => {
  try {
    const html = document.documentElement;
    const body = document.body;

    const fontFamilyVar = "--font-family-var";
    const robotoBold = getComputedStyle(html)
      .getPropertyValue(fontFamilyVar)
      .trim();

    const none = "none";
    const def = "default";

    const copy = "copy";
    const dragstart = "dragstart";
    const keydown = "keydown";
    const select = "select";

    (function bodyElToken() {
      const eventArray = [copy, dragstart, keydown, select];

      eventArray.forEach((event) => {
        if (!event) return;

        body.addEventListener(event, (e) => e.preventDefault());
      });

      if (robotoBold) {
        Object.assign(body.style, {
          fontFamily: robotoBold,
          webkitUserSelect: none,
          userSelect: none,
          cursor: def,
          pointerEvents: none,
        });
      }
    })();

    const get = (id) =>
      document.getElementById(id) || document.querySelector("#" + id);

    const mainDiv = get("mainContainerId");
    const subDiv = get("subContainerId");

    const instagramMainDiv = get("instagramMainContainerId");
    const instagramImgDiv = get("instagramImgContainerId");
    const instagramBackgroundDiv = get("instagramBackgroundContainerId");
    const instagramImg = get("instagramImgId");
    const instagramNameDiv = get("instagramNameContainerId");
    const instagramNameSpan = get("instagramNameSpanId");

    (function instragamToken() {
      const src = "src";
      const alt = "alt";

      (function instagramClearToken() {
        const clear = "";

        if (instagramImgDiv && instagramBackgroundDiv && instagramImg) {
          instagramImg.setAttribute(src, clear);
          instagramImg.setAttribute(alt, clear);
        }

        if (instagramNameDiv && instagramNameSpan) {
          instagramNameSpan.innerText = clear;
        }
      })();

      (function instagramContentsToken() {
        if (instagramMainDiv && instagramImg && instagramNameSpan) {
          instagramImg.setAttribute(
            src,
            "/Image Ordner/Social Icon's Ordner/instagram_icon.png",
          );
          instagramImg.setAttribute(alt, "Instagram Account: pietrobento");

          instagramNameSpan.textContent = "pietrobento";
        }
      })();
    })();

    const youtubeMainDiv = get("youtubeMainContainerId");
    const youtubeImgDiv = get("youtubeImgContainerId");
    const youtubeBackgroundDiv = get("youtubeBackgroundContainerId");
    const youtubeImg = get("youtubeImgId");
    const youtubeNameDiv = get("youtubeNameContainerId");
    const youtubeNameSpan = get("youtubeNameSpanId");

    (function youtubeToken() {
      const src = "src";
      const alt = "alt";

      (function youtubeClearToken() {
        const clear = "";

        if (youtubeImgDiv && youtubeBackgroundDiv && youtubeImg) {
          youtubeImg.setAttribute(src, clear);
          youtubeImg.setAttribute(alt, clear);
        }

        if (youtubeNameDiv && youtubeNameSpan) {
          youtubeNameSpan.innerText = clear;
        }
      })();

      (function youtubeContentsToken() {
        if (youtubeMainDiv && youtubeBackgroundDiv && youtubeImg) {
          youtubeImg.setAttribute(
            src,
            "Image Ordner/Social Icon's Ordner/youtube_icon.png",
          );
          youtubeImg.setAttribute(alt, "YouTube Channel: Pietro Bento");
        }

        if (youtubeMainDiv && youtubeNameDiv && youtubeNameSpan) {
          youtubeNameSpan.textContent = "Pietro Bento";
        }
      })();
    })();

    const discordMainDiv = get("discordMainContainerId");
    const discordImgDiv = get("discordImgContainerId");
    const discordBackgroundDiv = get("discordBackgroundContainerId");
    const discordImg = get("discordImgId");
    const discordNameDiv = get("discordNameContainerId");
    const discordNameSpan = get("discordNameSpanId");

    (function discordToken() {
      const src = "src";
      const alt = "alt";

      (function dcClearToken() {
        const clear = "";

        if (discordImgDiv && discordBackgroundDiv && discordImg) {
          discordImg.setAttribute(src, clear);
          discordImg.setAttribute(alt, clear);
        }

        if (discordNameDiv && discordNameSpan) {
          discordNameSpan.innerText = clear;
        }
      })();

      (function dcContentsToken() {
        if (discordMainDiv && discordBackgroundDiv && discordImg) {
          discordImg.setAttribute(
            src,
            "Image Ordner/Social Icon's Ordner/discord_icon.png",
          );
          discordImg.setAttribute(
            alt,
            "Discord Server: The Sickandangry Home!",
          );
        }

        if (discordMainDiv && discordNameDiv && discordNameSpan) {
          discordNameSpan.textContent = "The Sickandangry Home!";
        }
      })();
    })();

    const facebookMainDiv = get("facebookMainContainerId");
    const facebookImgDiv = get("facebookImgContainerId");
    const facebookBackgroundDiv = get("facebookBackgroundContainerId");
    const facebookImg = get("facebookImgId");
    const facebookNameDiv = get("facebookNameContainerId");
    const facebookNameSpan = get("facebookNameSpanId");

    (function facebookToken() {
      const src = "src";
      const alt = "alt";

      (function fbClearToken() {
        const clear = "";

        if (facebookImgDiv && facebookBackgroundDiv && facebookImg) {
          facebookImg.setAttribute(src, clear);
          facebookImg.setAttribute(alt, clear);
        }

        if (facebookNameDiv && facebookNameSpan) {
          facebookNameSpan.innerText = clear;
        }
      })();

      (function fbContentsToken() {
        if (facebookMainDiv && facebookBackgroundDiv && facebookImg) {
          facebookImg.setAttribute(
            src,
            "Image Ordner/Social Icon's Ordner/facebook_icon.png",
          );
          facebookImg.setAttribute(alt, "Facebook Channel: Pietro Bento");
        }

        if (facebookMainDiv && facebookNameDiv && facebookNameSpan) {
          facebookNameSpan.textContent = "Pietro Bento";
        }
      })();
    })();

    (function elSecurityToken() {
      const elementArray = [
        mainDiv,
        subDiv,
        instagramMainDiv,
        instagramImgDiv,
        instagramBackgroundDiv,
        instagramImg,
        instagramNameDiv,
        instagramNameSpan,
        youtubeMainDiv,
        youtubeImgDiv,
        youtubeBackgroundDiv,
        youtubeImg,
        youtubeNameDiv,
        youtubeNameSpan,
        discordMainDiv,
        discordImgDiv,
        discordBackgroundDiv,
        discordImg,
        discordNameDiv,
        discordNameSpan,
        facebookMainDiv,
        facebookImgDiv,
        facebookBackgroundDiv,
        facebookImg,
        facebookNameDiv,
        facebookNameSpan,
      ];
      const eventArray = [copy, dragstart, keydown, select];

      elementArray.forEach((element) => {
        if (!element) return;

        eventArray.forEach((event) => {
          if (!event) return;

          element.addEventListener(event, (e) => e.preventDefault());
        });
      });

      elementArray.filter(Boolean).forEach((element) => {
        if (!element) return;

        if (robotoBold) {
          Object.assign(element.style, {
            fontFamily: robotoBold,
            webkitUserSelect: none,
            userSelect: none,
            cursor: def,
            pointerEvents: none,
          });
        }
      });
    })();

    const hidden = "hidden";
    const visible = "visible";
    const zero = 0;
    const one = 1;

    function hiddenToken() {
      const elementArray = [
        instagramBackgroundDiv,
        instagramNameSpan,
        youtubeBackgroundDiv,
        youtubeNameSpan,
        discordBackgroundDiv,
        discordNameSpan,
        facebookBackgroundDiv,
        facebookNameSpan,
      ].filter(Boolean);

      elementArray.forEach((element) => {
        if (!element) return;

        element.style.visibility = hidden;
        element.style.opacity = zero;
      });
    }
    hiddenToken();

    const wait = (ms) => new Promise((r) => setTimeout(r, ms));

    async function socialAnimationToken() {
      const elementArray = [
        instagramBackgroundDiv,
        instagramNameSpan,
        youtubeBackgroundDiv,
        youtubeNameSpan,
        discordBackgroundDiv,
        discordNameSpan,
        facebookBackgroundDiv,
        facebookNameSpan,
      ];

      const cssClassSlideRotateImgIn = "slide-rotate-img-in";
      const cssClassSlideRotateImgOut = "slide-rotate-img-out";

      const cssClassSlideNameIn = "slide-name-in";
      const cssClassSlideNameOut = "slide-name-out";

      const cssClassFadeIn = "fade-in";
      const cssClassFadeOut = "fade-out";

      const onOff = 1250;
      const delay = 300000;
      const duration = 5000;

      elementArray.forEach((element) => {
        if (!element) return;

        element.classList.remove(
          cssClassSlideRotateImgIn,
          cssClassSlideRotateImgOut,
          cssClassSlideNameIn,
          cssClassSlideNameOut,
          cssClassFadeIn,
          cssClassFadeOut,
        );
      });

      hiddenToken();

      await wait(delay);

      instagramBackgroundDiv.style.visibility = visible;
      instagramBackgroundDiv.style.opacity = one;
      instagramBackgroundDiv.classList.add(cssClassSlideRotateImgIn);
      await wait(onOff);

      instagramNameSpan.style.visibility = visible;
      instagramNameSpan.style.opacity = one;
      instagramNameSpan.classList.add(cssClassSlideNameIn);

      await wait(duration);

      instagramNameSpan.classList.remove(cssClassSlideNameIn);
      instagramNameSpan.classList.add(cssClassFadeOut);
      instagramNameSpan.style.visibility = hidden;
      instagramNameSpan.style.opacity = zero;
      await wait(onOff);

      instagramBackgroundDiv.classList.remove(cssClassSlideRotateImgIn);
      instagramBackgroundDiv.classList.add(cssClassFadeOut);
      instagramBackgroundDiv.style.visibility = hidden;
      instagramBackgroundDiv.style.opacity = zero;
      await wait(onOff);

      youtubeBackgroundDiv.classList.add(cssClassFadeIn);
      youtubeBackgroundDiv.style.visibility = visible;
      youtubeBackgroundDiv.style.opacity = one;
      await wait(onOff);

      youtubeNameSpan.classList.add(cssClassFadeIn);
      youtubeNameSpan.style.visibility = visible;
      youtubeNameSpan.style.opacity = one;

      await wait(duration);

      youtubeNameSpan.classList.remove(cssClassFadeIn);
      youtubeNameSpan.classList.add(cssClassFadeOut);
      youtubeNameSpan.style.visibility = hidden;
      youtubeNameSpan.style.opacity = zero;
      await wait(onOff);

      youtubeBackgroundDiv.classList.remove(cssClassFadeIn);
      youtubeBackgroundDiv.classList.add(cssClassFadeOut);
      youtubeBackgroundDiv.style.visibility = hidden;
      youtubeBackgroundDiv.style.opacity = zero;
      await wait(onOff);

      discordBackgroundDiv.classList.add(cssClassFadeIn);
      discordBackgroundDiv.style.visibility = visible;
      discordBackgroundDiv.style.opacity = one;
      await wait(onOff);

      discordNameSpan.classList.add(cssClassFadeIn);
      discordNameSpan.style.visibility = visible;
      discordNameSpan.style.opacity = one;

      await wait(duration);

      discordNameSpan.classList.remove(cssClassFadeIn);
      discordNameSpan.classList.add(cssClassFadeOut);
      discordNameSpan.style.visibility = hidden;
      discordNameSpan.style.opacity = zero;
      await wait(onOff);

      discordBackgroundDiv.classList.remove(cssClassFadeIn);
      discordBackgroundDiv.classList.add(cssClassFadeOut);
      discordBackgroundDiv.style.visibility = hidden;
      discordBackgroundDiv.style.opacity = zero;
      await wait(onOff);

      facebookBackgroundDiv.classList.add(cssClassFadeIn);
      facebookBackgroundDiv.style.visibility = visible;
      facebookBackgroundDiv.style.opacity = one;
      await wait(onOff);

      facebookNameSpan.classList.add(cssClassFadeIn);
      facebookNameSpan.style.visibility = visible;
      facebookNameSpan.style.opacity = one;

      await wait(duration);

      facebookNameSpan.classList.remove(cssClassFadeIn);
      facebookNameSpan.classList.add(cssClassSlideNameOut);
      facebookNameSpan.style.visibility = hidden;
      facebookNameSpan.style.opacity = zero;
      await wait(onOff);

      facebookBackgroundDiv.classList.remove(cssClassFadeIn);
      facebookBackgroundDiv.classList.add(cssClassSlideRotateImgOut);
      facebookBackgroundDiv.style.visibility = hidden;
      facebookBackgroundDiv.style.opacity = zero;
      await wait(onOff);

      await wait(delay);

      return socialAnimationToken();
    }
    socialAnimationToken();
  } catch (error) {
    console.error("Haupt-Fehler:", error);
  }
});
