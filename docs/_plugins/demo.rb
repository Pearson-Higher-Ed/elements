module Jekyll
  module Tags
    class DemoBlock < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
        @lang = 'html'
      end

      def render(context)
        code = super.to_s.strip

        code_example = case context.registers[:site].highlighter
          when 'rouge'
            render_rouge(code)
          end

        demo(code, code_example)
      end

      def demo(code, code_example)
        [
          "<div class=\"d-demo pe-card\">",
          "  <div class=\"pe-card__heading\">#{code}</div>",
          "  <div class=\"pe-card__content\">#{code_example}</div>",
          "</div>"
        ].join("\n")
      end

      def render_rouge(code)
        require 'rouge'
        formatter = Rouge::Formatters::HTML.new(line_numbers: false, wrap: false)
        lexer = Rouge::Lexer.find_fancy(@lang, code) || Rouge::Lexers::PlainText
        code = formatter.format(lexer.lex(code))
        "<pre>#{code}</pre>"
      end

    end
  end
end

Liquid::Template.register_tag('demo', Jekyll::Tags::DemoBlock)
