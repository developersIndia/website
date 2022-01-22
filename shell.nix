{ mkShell, pkgs }:
mkShell {
  name = "developerindia";

  buildInputs = with pkgs; [
    nodejs-16_x
    nodePackages.typescript-language-server
  ];
}
