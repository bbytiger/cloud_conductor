import click
import tabulate

import typelayer
import serializer

class CliManager:
    def __init__(self, path):
        self.path = path
        self.pipelines = self.load()

    def append_pipeline(self, pipeline):
        self.pipelines.append(pipeline)

    def remove_pipeline(self, pipeline):
        pass

    def sync(self):
        # check that pipelines match
        pass

    def load(self):
        # load from config file

    

@click.group()
@click.option('--config_path', default="./cache/config")
@click.option('--verbose/--quiet', default=False)
@click.pass_context
def cli(ctx, config_path, debug):
    if debug:
        click.echo('Debug mode is on')
        click.echo('Config path set to {}'.format(config_path))
    ctx.ensure_object(dict)
    ctx.object['DEBUG'] = debug
    ctx.object['MANAGER'] = CliManager(config_path)

@cli.command()
@click.pass_context
def list_pipelines(ctx):
    click.echo(
        tabulate.tabulate(
            ctx.object['MANAGER'].pipelines, 
            headers=["NAME", "STAGE COUNT", "CREATED AT", "ID"]
        )
    )

@cli.command()
@click.option('--stagecount', default=1)
@click.pass_context
def create_pipeline(ctx):

    def create_stage():
        pass



@cli.command()
def update_pipeline():
    pass



if __name__ == "__main__":
    cli()