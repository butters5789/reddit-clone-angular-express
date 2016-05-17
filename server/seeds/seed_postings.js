exports.seed = function(knex, Promise) {
    return Promise.join(
        knex('postings').del(),

        knex('postings').insert({
            author_id: 1,
            title: 'iLive-80',
            image_url: 'http://cdn3.volusion.com/b3o4z.gn3gt/v/vspfiles/photos/9999-05589-3.jpg?1459514594',
            posting: 'The Surface is simply a controller for the MixRack. It also has an audio rack built into it to conveniently provide local inputs and outputs at the mix position. It features a large analogue style, one control per function processing block, TouchScreen, name and colour virtual "write-on" strip, banks of motorised faders with independent layers, SoftKeys, built-in headphones, local monitor and talkback. The modular iLive-80 allows a variety of audio I/O modules, network formats and redundant power supply options, and can be shipped in a touring flight case.',
            votes: 1
        }),
        knex('postings').insert({
            author_id: 2,
            title: 'iDR 64',
            image_url: 'http://www.allen-heath.com/media/iDR_64_Front_Main.jpg',
            posting: 'The MixRack is the heart of the iLive system, housing the DSP, most of the I/O, networking and control interfaces. The iDR-64 is the biggest of the fixed format range with 64 Mic/Line inputs and 32 XLR line outputs. AES Digital Output Option available, offering 2 AES3 digital stereo outputs in place of 4 analogue line outputs. iDR-64 can be ordered with a single AES Digital Output Option pre-fitted. A retro-fit kit is also available, allowing single or multiple AES Digital Output Options to be fitted. iLive Firmware V1.9 is required for this option.',
            votes: 2
        }),
        knex('postings').insert({
            author_id: 3,
            title: 'Zone 2D',
            image_url: 'http://www.synthtopia.com/wp-content/uploads/2007/01/allen-heath-zone-2d.jpg',
            posting: 'The Xone:2D is a combination of an 18-channel USB 2.0 soundcard and MIDI controller, which DJ’s can combine with their existing analogue mixer to create a complete digital DJ mixing system, perfect for integration with DJ software such as Ableton Live and Traktor. The 96kHz 24-bit USB 2.0 soundcard is provided with a large array of connections for easy interfacing into any DJ setup, while MIDI clocks are generated using the tap tempo button or by analysing the BPM of incoming audio, available from all input channels. One of the input channels can be switched between mic and line, while the other two are phono/line, and the unit is completed by a comprehensive onboard monitoring system.',
            votes: 3
        })
    );
};
