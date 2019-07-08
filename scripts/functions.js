// https://projects.lukehaas.me/scrollify/
$(document).ready(function() {
        $.scrollify({
                section: '.panel',
                sectionName: 'section-name',
                scrollbars: false,
                before(i, panels) {
                        const ref = panels[i].attr('data-section-name');

                        $('.pagination a.active').removeClass('active');

                        $('.pagination')
                                .find(`a[href="#${ref}"]`)
                                .addClass('active');
                },
        });
        $('.pagination a').on('click', function() {
                $.scrollify.move($(this).attr('href'));
        });
});

// smoothState ala https://github.com/miguel-perez/smoothState.js
$(function() {
        const $page = $('#main');
        const options = {
                debug: true,
                prefetch: true,
                cacheLength: 2,
                forms: 'form',
                onStart: {
                        duration: 250, // Duration of our animation
                        render($container) {
                                // Add your CSS animation reversing class
                                $container.addClass('is-exiting');
                                // Restart your animation
                                smoothState.restartCSSAnimations();
                        },
                },
                onReady: {
                        duration: 0,
                        render($container, $newContent) {
                                // Remove your CSS animation reversing class
                                $container.removeClass('is-exiting');
                                // Inject the new content
                                $container.html($newContent);
                        },
                },
        };
        const smoothState = $page.smoothState(options).data('smoothState');
});

// particles.js
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/scripts/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
});
